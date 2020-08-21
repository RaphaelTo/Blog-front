import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './ArticleItem.css';

const ArticleItem = ({items}) => {

    const article = items.map((result, key) => (
        <Link to={`/article/${result._id}`}>
            <div className="article-item" key={key}>
                <img src={result.img} alt={result.title} width="350" height="250" data-testid="img-article"/>
                <h1 data-testid="title-article">{result.title}</h1>
                <span data-testid="abstract-article">{result.abstract}</span>
            </div>
        </Link>
    ));

    return (
            <div className="containt-article">
                {article}
            </div>
    );

};

ArticleItem.propTypes = {
    items: PropTypes.array
};

ArticleItem.defaultProps = {
    items: []
};

export default ArticleItem;