const mongoose = require('mongoose');
const Material = require('./Materials');
const Supplier = require('./Supplier');
const FurnitureCategory = require('./FurnitureCategory');
const Furniture = require('./Furniture');

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports = {
    connectDb,
    models: {
        Material,
        Supplier,
        FurnitureCategory,
        Furniture
    }
};
