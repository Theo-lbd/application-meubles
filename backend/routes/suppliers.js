const express = require('express');
const { models } = require('../models');
const router = express.Router();

// Obtenir tous les fournisseurs
router.get('/', async (req, res) => {
    try {
        const suppliers = await models.Supplier.find();
        res.json(suppliers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
