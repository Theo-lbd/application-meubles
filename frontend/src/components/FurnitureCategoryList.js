import React from 'react';

const FurnitureCategoryList = ({ categories }) => {
    const hasCategories = categories && categories.length > 0;

    return (
        <div>
            <h2>Catégories de Meubles</h2>
            {hasCategories ? (
                <ul className="list-group">
                    {categories.map(category => (
                        <li key={category._id} className="list-group-item">
                            {category.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucune catégorie de meuble trouvée.</p>
            )}
        </div>
    );
};

export default FurnitureCategoryList;
