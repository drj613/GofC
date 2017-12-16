// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
// var seed = require('./seeders/city_data.js');
var seed = require('./seeders/seeds.js');

// Sets up the Express App
// =============================================================
var app = express();
app.use(express.static(__dirname + "/public"))

app.use(bodyParser.urlencoded({
  extended: false
}))


// Requiring our models for syncing
var db = require("./models");

app.use(methodOverride("_method"));

var routes = require("./controllers/routes.js");
app.use("/", routes);

var PORT = process.env.PORT || 8080;

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({
    force: true
  })
  //Run seed functions to populate database
  .then(function () {
    var promise = seed(db);
    console.log('This is our promise:', promise);
    promise.then(function () {
      app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
      });
    });
  });