import axios from 'axios';

export const getFurnitureCategories = async () => {
    const response = await axios.get('http://localhost:3000/api/furniture-categories');
    return response.data;
};
