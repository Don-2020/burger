var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

//set handlebars
var exphb = require("express-handlebars");

app.engine("handlebars", exphb({ defaultLayout: "main"}))
app.set("view engine", "handlebars");

//importing routes
var routes = require("./controllers/burgers_controller");

app.use(routes);

//app listening
app.listen(PORT, function(){
    console.log("App is now listening at localhost:" + PORT)
});