import React from 'react';
import { Link } from 'react-router-dom';

const FurnitureList = ({ furnitures, onDelete }) => {
    return (
        <div>
            <h2>Liste des Meubles</h2>
            <Link to="/furnitures/new">Ajouter un Meuble</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Matériaux</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {furnitures.map(furniture => (
        <tr key={furniture._id}>
            <td>{furniture.name}</td>
            <td>
                {furniture.materials.map((material, index) => (
                    <span key={`${material._id}-${index}`}>{material.name}</span>
                ))}
            </td>
                            <td>
                                <Link to={`/furnitures/edit/${furniture._id}`} className="btn btn-primary">Modifier</Link>
                                <button onClick={() => onDelete(furniture._id)} className="btn btn-primary">Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FurnitureList;
