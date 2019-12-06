// Requiring the packages
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


// Create our express app
const app = express();

// Set the engine that is to render files
app.set("view engine", "pug");

// Set the path where to find the pages to render
app.set("views", path.join(__dirname, "views"));

// Set the middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'Public')));


// mongoose database connection
mongoose.connect("mongodb://localhost:27017/Assessment", () => { console.log('Database Connection Successful') });

// Import Routes
const registrationRoute = require('./routes/regRoute')
app.use('/register', registrationRoute);

//  Listening for requests: the server
app.listen(5000, () => {
    console.log("App Listening on Port 5000");

})