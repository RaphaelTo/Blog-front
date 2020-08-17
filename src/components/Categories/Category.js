import React from "react";
import PropTypes from 'prop-types';
import './Category.css';

const Category = ({items}) => {
    const itemCat = items.map((result, key) => (
        <li key={key} data-testid='name-categories'>{result.name}</li>
    ));

    return (
        <div className="cat-nav">
            <ul>
                {itemCat}
            </ul>
        </div>
    )
};

Category.propTypes = {
    items: PropTypes.array
};

Category.defaultProps = {
    items: []
};

export default Category;
