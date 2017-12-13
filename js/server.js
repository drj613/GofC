// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
app.use(express.static(__dirname + "/public"))

app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({
	defaultlayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/routes.js");
app.use("/", routes);

var PORT = process.env.PORT || 8080;

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

