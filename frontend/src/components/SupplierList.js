import React from 'react';

const SupplierList = ({ suppliers }) => {
    return (
        <div>
            <h2>Liste des Fournisseurs</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nom</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map(supplier => (
                        <tr key={supplier._id}>
                            <td>{supplier.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SupplierList;
