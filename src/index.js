const express = require("express");
const bodyParser = require("body-parser");
const cors =  require("cors");
require('dotenv').config({ silent: true });

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
    res.send({message: "Welcome to the homepage!"})
});

app.get('/find-square', require('./api/find-square'));
app.get('/test-connect-database', require('./api/test-connect-database'));

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`)
})

module.exports = app