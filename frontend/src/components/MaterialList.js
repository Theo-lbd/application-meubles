import React from 'react';

const MaterialList = ({ materials }) => {
    return (
        <div>
            <h2>Liste des Matériaux</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {materials.map(material => (
                        <tr key={material._id}>
                            <td>{material.name}</td>
                            <td>{material.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MaterialList;
