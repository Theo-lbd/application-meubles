const express = require('express');
const { models } = require('../models');
const router = express.Router();

// Obtenir tous les meubles
router.get('/', async (req, res) => {
    try {
        const furnitures = await models.Furniture.find()
            .populate('category')
            .populate('materials');
        res.json(furnitures);
    } catch (error) {
        console.error("Erreur lors de la récupération des meubles: ", error);
        res.status(500).json({ message: error.message });
    }
});

// Ajouter un nouveau meuble
router.post('/', async (req, res) => {
    console.log(req.body);

    if (!req.body.name || !req.body.category || !req.body.materials) {
        return res.status(400).json({ message: 'Données manquantes ou format incorrect' });
    }

    const furniture = new models.Furniture({
        name: req.body.name,
        category: req.body.category,
        materials: req.body.materials
    });

    try {
        const newFurniture = await furniture.save();
        res.status(201).json(newFurniture);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Mettre à jour un meuble
router.put('/:id', async (req, res) => {
    try {
        const updatedFurniture = await models.Furniture.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedFurniture);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Supprimer un meuble
router.delete('/:id', async (req, res) => {
    try {
        await models.Furniture.findByIdAndDelete(req.params.id);
        res.json({ message: 'Furniture deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
