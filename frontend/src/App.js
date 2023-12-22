import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import MaterialsPage from './pages/MaterialsPage';
import SuppliersPage from './pages/SuppliersPage';
import FurnitureCategoriesPage from './pages/FurnitureCategoriesPage';
import FurnituresPage from './pages/FurnituresPage';
import AddFurniturePage from './pages/AddFurniturePage';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <NavBar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/materials" element={<MaterialsPage />} />
                    <Route path="/suppliers" element={<SuppliersPage />} />
                    <Route path="/furniture-categories" element={<FurnitureCategoriesPage />} />
                    <Route path="/furnitures" element={<FurnituresPage />} />
                    <Route path="/furnitures/new" element={<AddFurniturePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
