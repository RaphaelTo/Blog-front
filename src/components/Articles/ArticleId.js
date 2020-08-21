import React, {useEffect, useCallback, useState} from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import marked from 'marked';
import DOMPurify from 'dompurify';
import Error from "../Error/Error";
import './ArticleId.css';

const ArticleId = () => {

    const [article, setArticle] = useState({  type: '', result : {} } );
    const { id } = useParams();

    const convertDate = (date) => {
        const newDate = new Date(date);
        const month = newDate.getMonth() + 1 < 10 && newDate.getMonth() + 1 > 0 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1;
        return `${newDate.getDate()}/${month}/${newDate.getFullYear()}`;
    };

    const getArticleById = useCallback(async () => {
        try{
            const response = await axios.get(`http://localhost:30003/api/v1/article/byId/${id}`);
            response.data.result.date = convertDate(response.data.result.date);
            setArticle(response.data);
        }catch (e) {
            setArticle({type : "error"});
        }
    },[id]);

    const markedInDom = () => {
        return {
            __html : DOMPurify.sanitize(marked(article.result.content))
        }
    };

    useEffect(() => {
        getArticleById();
    },[getArticleById]);

    return (
        <>
        {
            article.type === "success" ?
                <div className="article-content" data-testid="article-content">
                    <h1 id="article-title" data-testid="article-title">{article.result.title}</h1>
                    <p id="article-date" data-testid="article-date">Créer le {article.result.date}</p>
                    <div className="div-article-img">
                        <img data-testid="article-img" src={article.result.img} alt={article.result.title} />
                    </div>
                    <div className="marked" data-testid="content" dangerouslySetInnerHTML={markedInDom()} />
                </div>
                : article.type === "error" ?
                    <div data-testid="loading-error">
                        <Error />
                    </div>
                :
                <p data-testid="loading-article">Loading ...</p>
        }
        </>
    )
};

export default ArticleId;