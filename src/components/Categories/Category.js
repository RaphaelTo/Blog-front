import React from "react";
import PropTypes from 'prop-types';

const Category = ({items}) => {
    return (
        <h1>Halo Category</h1>
    )
};

Category.propTypes = {
    items: PropTypes.array
};

Category.defaultProps = {
    items: []
};

export default Category;
