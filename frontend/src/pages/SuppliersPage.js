import React, { useState, useEffect } from 'react';
import SupplierList from '../components/SupplierList';
import { getSuppliers } from '../services/supplierService';

const SuppliersPage = () => {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        const fetchSuppliers = async () => {
            const data = await getSuppliers();
            setSuppliers(data);
        };
        fetchSuppliers();
    }, []);

    return (
        <div>
            <h1>Fournisseurs</h1>
            <SupplierList suppliers={suppliers} />
        </div>
    );
};

export default SuppliersPage;
