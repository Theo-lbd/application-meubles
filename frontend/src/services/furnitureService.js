import axios from 'axios';

export const getFurnitures = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/furnitures');
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des meubles", error);
        throw error;
    }
};
export const deleteFurniture = async (furnitureId) => {
    try {
        const response = await axios.delete(`http://localhost:3000/api/furnitures/${furnitureId}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la suppression du meuble', error);
    }
};
export const addFurniture = async (furnitureData) => {
    try {
        const response = await axios.post('http://localhost:3000/api/furnitures', furnitureData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout d\'un meuble', error);
        throw error;
    }
};

