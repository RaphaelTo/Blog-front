import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import Category from "./Category";

const Categories = () => {
    const [categories, setCategories] = useState({result : []});

    const getCategoriesApi = useCallback( async () => {
        const response = await axios.get('http://localhost:30003/api/v1/category/all/');
        setCategories({result : response.data.result} )
    }, []);

    useEffect(() => {
        getCategoriesApi()
    }, []);

    return (
        <>
            {categories.result.length > 0 ?
                <div data-testid="category-component">
                    <Category items={categories.result} />
                </div>
                : <p data-testid="p-element">Aucune catégorie</p>}
        </>
    )
};

export default Categories;

