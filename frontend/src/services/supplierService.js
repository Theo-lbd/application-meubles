import axios from 'axios';

export const getSuppliers = async () => {
    const response = await axios.get('http://localhost:3000/api/suppliers');
    return response.data;
};
