require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const Material = require('./models/Materials'); 
const Supplier = require('./models/Supplier');
const FurnitureCategory = require('./models/FurnitureCategory');
const { connectDb } = require('./database');

connectDb().then(async () => {
    // Créer des fournisseurs
    const bBois = await Supplier.create({ name: "BBois" });
    const metaLo = await Supplier.create({ name: "MetaLo" });
    const pPlastique = await Supplier.create({ name: "pPlastique" });

    // Créer des matériaux et les associer aux fournisseurs
    const materials = await Material.create([
        { name: "Frêne", type: "Bois", supplier: bBois._id },
        { name: "Chêne", type: "Bois", supplier: bBois._id },
        { name: "Noyer", type: "Bois", supplier: bBois._id },
        { name: "Acier Inox", type: "Fer", supplier: metaLo._id },
        { name: "Aluminum", type: "Fer", supplier: metaLo._id },
        { name: "Plastique", type: "Plastique", supplier: pPlastique._id }
    ]);

    // Mise à jour des fournisseurs avec les matériaux correspondants
    await Promise.all([
        Supplier.findByIdAndUpdate(bBois._id, { $push: { materials: { $each: materials.filter(m => m.type === "Bois").map(m => m._id) } } }),
        Supplier.findByIdAndUpdate(metaLo._id, { $push: { materials: { $each: materials.filter(m => m.type === "Fer").map(m => m._id) } } }),
        Supplier.findByIdAndUpdate(pPlastique._id, { $push: { materials: materials.find(m => m.type === "Plastique")._id } })
    ]);

    // Créer des catégories de meubles
    await FurnitureCategory.create({ name: "Armoire" });
    await FurnitureCategory.create({ name: "Étagère" });

    console.log("Données ajoutées !");
    mongoose.connection.close();
}).catch(err => {
    console.error("Erreur lors de l'initialisation des données", err);
    mongoose.connection.close();
});
