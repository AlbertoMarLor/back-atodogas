const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');


const app = express();

const PORT = 3000

const dbUrl = "mongodb+srv://andrea:darling@prueba.pyn8oyp.mongodb.net/atodogas?retryWrites=true&w=majority"


mongoose.connect(dbUrl).then(() => {
    console.info("Connected to the DB");
})
    .catch((e) => {
        console.log("Error", e);
    });

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/api');
app.use('/api', routes)


