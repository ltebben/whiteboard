var express = require('express');
var app = express();
var port = 8080;
var cors = require("cors");

app.use(cors());

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(port);