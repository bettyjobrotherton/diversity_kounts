var express = require('express');
var server = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
// var mongoURI; //need link to MongoDB;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

// mongoose.connect(mongoURI);

server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res){
  res.sendFile('public/html/index.html', {root: __dirname});
});

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
