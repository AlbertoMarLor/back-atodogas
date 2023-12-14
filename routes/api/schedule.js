const Schedule = require("../../models/schedule")
const router = require('express').Router();

/* GET ONE */

router.get('/:restaurant', async (req, res) => {

    const { restaurant } = req.params


    try {
        const response = await Schedule.findOne({ restaurantId: restaurant });

        res.status(200).json({
            status: "success",
            data: response.schedule
        })

    } catch (error) {
        res.status(500).json({
            status: "error",
            error: error.message
        })
    }


})

/* CREATE */

router.post('/', async (req, res) => {

    let body = req.body
    const schedule = new Schedule(body);

    try {
        const response = await schedule.save();
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

router.put('/:restaurantId', async (req, res) => {

    const { restaurantId } = req.params


    try {
        const response = await Schedule.findOneAndUpdate({ restaurantId: restaurantId }, req.body, { new: true });

        if (!response) {
            return res.status(404).json({
                status: "not_found",
                error: "There is no restaurant with that ID."

            })
        }

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