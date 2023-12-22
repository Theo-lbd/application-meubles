const mongoose = require('mongoose');

const connectDb = () => {
    const dbURI = process.env.DATABASE_URL;
    return mongoose.connect(dbURI);
};

module.exports = { connectDb };
