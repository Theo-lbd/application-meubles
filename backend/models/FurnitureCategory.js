const mongoose = require('mongoose');

const furnitureCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const FurnitureCategory = mongoose.model('FurnitureCategory', furnitureCategorySchema);
module.exports = FurnitureCategory;