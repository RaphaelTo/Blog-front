import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import ArticleItem from "./ArticleItem";

const Article = () => {
    const [articles, setArticles] = useState({result: []});

    const getArticles = useCallback(async () => {
       const response = await axios.get('http://localhost:30003/api/v1/article/all');
       setArticles({result: response.data.result});
    }, []);

    useEffect(() => {
        getArticles();
    },[getArticles]);

    return (
        <>
            {articles.result.length > 0 ?
                    <div data-testid="article-component">
                        <ArticleItem items={articles.result} />
                    </div>
                    :
                    <h1 data-testid="zero-article">0 article trouvé</h1>
            }
        </>
    )
};

export default Article;