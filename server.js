require('dotenv').config();

let express = require("express");
let exphbs = require("express-handlebars");
let app = express();

let PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let router = require("./controllers/burgers_Controller.js");

app.use(router);

app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});