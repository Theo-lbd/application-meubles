const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'FurnitureCategory', required: true },
    materials: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Material', required: true }]
});

module.exports = mongoose.model('Furniture', furnitureSchema);
