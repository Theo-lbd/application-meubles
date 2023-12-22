import React, { useState, useEffect } from 'react';
import { addFurniture } from '../services/furnitureService';
import { getFurnitureCategories } from '../services/furnitureCategoryService';
import { getMaterials } from '../services/materialService';
import { useNavigate } from 'react-router-dom';

const AddFurniturePage = () => {
    const [furniture, setFurniture] = useState({
        name: '',
        category: '',
        materials: []
    });

    const [categories, setCategories] = useState([]);
    const [materials, setMaterials] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategoriesAndMaterials = async () => {
            const categoriesData = await getFurnitureCategories();
            const materialsData = await getMaterials();
            setCategories(categoriesData);
            setMaterials(materialsData);
        };
        fetchCategoriesAndMaterials();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFurniture({ ...furniture, [name]: value });
    };

    const handleMaterialChange = (event) => {
        const value = event.target.value;
        if (!furniture.materials.includes(value)) {
            setFurniture({ ...furniture, materials: [...furniture.materials, value] });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await addFurniture(furniture);
            console.log('Meuble ajouté', response);
            navigate('/furnitures');
        } catch (error) {
            console.error('Erreur lors de l\'ajout du meuble', error);
        }
    };

    return (
        <div className="container mt-4">
            <h1>Ajouter un Meuble</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="furnitureName" className="form-label">Nom du Meuble</label>
                    <input
                        type="text"
                        className="form-control"
                        id="furnitureName"
                        name="name"
                        value={furniture.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="furnitureCategory" className="form-label">Catégorie</label>
                    <select
                        className="form-select"
                        id="furnitureCategory"
                        name="category"
                        onChange={handleChange}
                        value={furniture.category}
                        required
                    >
                        <option value="">Choisissez une catégorie</option>
                        {categories.map(category => (
                            <option key={category._id} value={category._id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="furnitureMaterials" className="form-label">Matériaux</label>
                    <select
                        className="form-select"
                        id="furnitureMaterials"
                        name="materials"
                        onChange={handleMaterialChange}
                    >
                        <option value="">Choisissez un matériau</option>
                        {materials.map(material => (
                            <option key={material._id} value={material._id}>{material.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Ajouter le Meuble</button>
            </form>
        </div>
    );
};

export default AddFurniturePage;
