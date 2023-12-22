require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDb } = require('./backend/database');

// Import des routeurs depuis le dossier backend
const materialsRouter = require('./backend/routes/materials');
const suppliersRouter = require('./backend/routes/suppliers');
const furnitureCategoriesRouter = require('./backend/routes/furnitureCategories');
const furnituresRouter = require('./backend/routes/furnitures');

const app = express();
app.use(cors());
app.use(express.json());

// Utilisation des routeurs
app.use('/api/materials', materialsRouter);
app.use('/api/suppliers', suppliersRouter);
app.use('/api/furniture-categories', furnitureCategoriesRouter);
app.use('/api/furnitures', furnituresRouter);

// Connexion à la base de données et démarrage du serveur
const PORT = process.env.PORT || 3000;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error("Erreur de connexion à la base de données", err);
});

// Route par défaut
app.get('/', (req, res) => {
    res.send('Serveur Backend en fonctionnement');
});
