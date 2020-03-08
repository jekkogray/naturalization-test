var express = require("express");
var app = express();
var path = require("path");


app.use(express.static(__dirname +"/../homepage/"));
app.listen(3000, () => console.log("Server is running..."));

