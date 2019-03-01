const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
app.use(bodyParser.json());

// CORS block
app.use(function(req, res, next) {
    res.setHeader('Content-type','application/json');
    res.setHeader('Accept','application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin');
    next();
});

// database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("database connected");
}).catch(err => {
    console.log('Error : database not connected', err);
    process.exit();
});

// imports app routes
require('./routes/users.route.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port : 3000");
});
