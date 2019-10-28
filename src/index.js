var express = require('express');
var app = express();
var port = 8080;

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(port);