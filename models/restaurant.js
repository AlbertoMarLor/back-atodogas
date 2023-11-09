const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String,
    },
    type: {
        type: String,
        trim: true
    }
});

const RestaurantModel = mongoose.model("Restaurante", restaurantSchema, "restaurantes")

module.exports = RestaurantModel