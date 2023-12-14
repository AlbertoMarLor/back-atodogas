const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
require('dotenv').config();



const app = express();

const PORT = 3000

mongoose.connect(process.env.DB_KEY).then(() => {
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


