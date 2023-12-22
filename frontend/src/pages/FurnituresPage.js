import React, { useState, useEffect } from 'react';
import FurnitureList from '../components/FurnitureList';
import { getFurnitures, deleteFurniture } from '../services/furnitureService'; 

const FurnituresPage = () => {
    const [furnitures, setFurnitures] = useState([]);

    useEffect(() => {
        const fetchFurnitures = async () => {
            try {
                const data = await getFurnitures();
                setFurnitures(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des meubles: ', error);
            }
        };
        fetchFurnitures();
    }, []);

    const handleDelete = async (furnitureId) => {
        await deleteFurniture(furnitureId);
        setFurnitures(furnitures.filter(f => f._id !== furnitureId));
    };

    return (
        <div>
            <h1>Meubles</h1>
            <FurnitureList furnitures={furnitures} onDelete={handleDelete} />
        </div>
    );
};

export default FurnituresPage;
