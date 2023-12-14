const { Schema, model } = require("mongoose");

const daysSchema = new Schema({
    Monday: {
        type: String,
        required: true
    },
    Tuesday: {
        type: String,
        required: true
    },
    Wednesday: {
        type: String,
        required: true
    },
    Thursday: {
        type: String,
        required: true
    },
    Friday: {
        type: String,
        required: true
    },
    Saturday: {
        type: String,
        required: true
    },
    Sunday: {
        type: String,
        required: true
    },
})



const scheduleSchema = new Schema({
    restaurantId: {
        type: String,
        required: true
    },
    schedule: daysSchema

});


const Schedule = model("Schedule", scheduleSchema, 'schedule');

module.exports = Schedule;