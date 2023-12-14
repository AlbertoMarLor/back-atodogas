const mongoose = require('mongoose');


const dishSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    ingredients: { type: String }
});


const menuSchema = new mongoose.Schema({
    menuName: { type: String, required: true },
    dishes: [dishSchema],
});


const restauranteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    img: { type: String, required: true },
    type: { type: String, required: true },
    menu: [menuSchema],
});


const Restaurante = mongoose.model('Restaurante', restauranteSchema);

module.exports = Restaurante;
