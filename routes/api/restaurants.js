const RestaurantModel = require("../../models/restaurant")
const router = require('express').Router();


/* GET ALL */
router.get("/", async (req, res) => {

    try {
        const response = await RestaurantModel.find();

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

/* GET ONE */

router.get("/:id", async (req, res) => {

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