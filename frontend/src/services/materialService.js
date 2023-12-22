import axios from 'axios';

export const getMaterials = async () => {
    const response = await axios.get('http://localhost:3000/api/materials');
    return response.data;
};
