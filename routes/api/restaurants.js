const RestaurantModel = require("../../models/restaurant")
const router = require('express').Router();
const unorm = require('unorm');


/* GET ALL */
router.get("/:nombre?", async (req, res) => {

    const { nombre } = req.params

    try {

        if (!nombre) {
            const response = await RestaurantModel.find().select({ menu: 0 });

            res.status(200).json({
                status: "success",
                data: response

            })
        } else {
            const restaurant = unorm.nfd(nombre).replace(/[\u0300-\u036f]/g, '');
            const response = await RestaurantModel.find({ nombre: new RegExp(restaurant, 'i') }).select({ menu: 0 });

            res.status(200).json({
                status: "success",
                data: response

            })
        }



    } catch (error) {
        res.status(500).json({
            status: "error",
            error: error.message
        })
    }
})

/* GET ONE */

router.get("/one/:id", async (req, res) => {

    const { id } = req.params

    try {
        const response = await RestaurantModel.findOne({ _id: id });

        res.status(200).json({
            status: "success",
            data: response

        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            error: error.message
        })
    }
})


/* CREATE */

router.post("/", async (req, res) => {

    let body = req.body
    const restaurant = new RestaurantModel(body);

    try {
        const response = await restaurant.save();
        res.status(200).json({
            status: "success",
            data: response

        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            error: error.message
        })
    }

})

/* EDIT */

router.put('/:id', async (req, res) => {

    const { id } = req.params
    let body = req.body


    try {
        const response = await RestaurantModel.findByIdAndUpdate(id, body, { new: true });
        res.status(200).json({
            status: "success",
            data: response

        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            error: error.message
        })
    }

})

/* DELETE */

router.delete('/:id', async (req, res) => {

    const { id } = req.params;

    try {
        const response = await RestaurantModel.findByIdAndDelete(id);
        res.status(200).json({
            status: "success",
            data: response

        })
    } catch (error) {
        res.status(500).json({
            status: "error",
            error: error.message
        })
    }

})

module.exports = router;