// set up import files
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// static content for public directory
app.use(express.static("public"));

// application to JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// setup handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine","handlebars");

// import routes to server
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

// start server and listen
app.listen(PORT, function(){
    console.log(`server listening on http://localhost:${PORT}`);    
});