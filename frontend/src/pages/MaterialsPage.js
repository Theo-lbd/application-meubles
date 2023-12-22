import React, { useState, useEffect } from 'react';
import MaterialList from '../components/MaterialList';
import { getMaterials } from '../services/materialService';

const MaterialsPage = () => {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        const fetchMaterials = async () => {
            const data = await getMaterials();
            setMaterials(data);
        };
        fetchMaterials();
    }, []);

    return (
        <div>
            <h1>Matériaux</h1>
            <MaterialList materials={materials} />
        </div>
    );
};

export default MaterialsPage;
