const express = require('express');
const { models } = require('../models');
const router = express.Router();

// Obtenir toutes les catégories de meubles
router.get('/', async (req, res) => {
    try {
        const categories = await models.FurnitureCategory.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
