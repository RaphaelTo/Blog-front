import React from 'react';
import ArticleId from "../components/Articles/ArticleId";
import Header from "../components/Header/Header";

const ArticlePage = () => {
    return (
        <>
            <Header/>
            <div className="article">
                <ArticleId />
            </div>
        </>
        )

};

export default ArticlePage;