import React from "react";
import PropTypes from 'prop-types';

const Category = ({items}) => {
    const itemCat = items.map((result, key) => (
        <li key={key} data-testid='name-categories'>{result.name}</li>
    ));

    return (
        <ul>
            {itemCat}
        </ul>
    )
};

Category.propTypes = {
    items: PropTypes.array
};

Category.defaultProps = {
    items: []
};

export default Category;
