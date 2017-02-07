var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

app.listen('1337', function(){
  console.log("Shit's goin' down on 1337")
})
