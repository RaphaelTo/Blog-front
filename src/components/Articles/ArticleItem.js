import React from "react";
import PropTypes from 'prop-types';

const ArticleItem = ({items}) => {

    const article = items.map((result, key) => (
        <div key={key}>
            <img src={result.img} alt={result.title} data-testid="img-article"/>
            <span data-testid="title-article">{result.title}</span>
            <span data-testid="abstract-article">{result.abstract}</span>
        </div>
    ));

    return (
        <div>
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