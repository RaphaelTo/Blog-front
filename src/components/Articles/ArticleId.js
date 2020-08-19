import React, {useEffect, useCallback, useState} from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Error from "../Error/Error";

const ArticleId = () => {

    const [article, setArticle] = useState({  type: '', result : {} } );
    const { id } = useParams();

    const convertDate = (date) => {
        const newDate = new Date(date);
        return `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`;
    };

    const getArticleById = useCallback(async () => {
        try{
            const response = await axios.get(`http://localhost:30003/api/v1/article/byId/${id}`);
            response.data.result.date = convertDate(response.data.result.date);
            setArticle(response.data);
        }catch (e) {
            setArticle({type : "error"});
        }
    },[]);

    useEffect(() => {
        getArticleById();
    },[getArticleById]);

    return (
        <>
        {
            article.type === "success" ?
                <div data-testid="article-content">
                    <h1 data-testid="article-title">{article.result.title}</h1>
                    <img data-testid="article-img" src={article.result.img} alt={article.result.title} />
                    <p data-testid="content">{article.result.content}</p>
                    <p data-testid="article-date">{article.result.date}</p>
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