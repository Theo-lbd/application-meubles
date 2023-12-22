import React, { useState, useEffect } from 'react';
import FurnitureCategoryList from '../components/FurnitureCategoryList';
import { getFurnitureCategories } from '../services/furnitureCategoryService';

const FurnitureCategoriesPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getFurnitureCategories();
            setCategories(data);
        };
        fetchCategories();
    }, []);

    return (
        <div>
            <h1>Catégories de Meubles</h1>
            <FurnitureCategoryList categories={categories} />
        </div>
    );
};

export default FurnitureCategoriesPage;
