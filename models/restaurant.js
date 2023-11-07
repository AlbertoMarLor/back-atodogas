const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String,
    }
});

const RestaurantModel = mongoose.model("Restaurante", restaurantSchema)

module.exports = RestaurantModel