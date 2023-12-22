import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Accueil</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/materials">Matériaux</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/suppliers">Fournisseurs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/furniture-categories">Catégories de Meubles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/furnitures">Mes Meubles</Link> {/* Ajout de ce lien */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
