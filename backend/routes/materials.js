const express = require('express');
const { models } = require('../models');
const router = express.Router();

// Obtenir tous les matériaux
router.get('/', async (req, res) => {
    try {
        const materials = await models.Material.find();
        res.json(materials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
