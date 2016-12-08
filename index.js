var express = require('express');
var server = express();
// var mongoose = require('mongoose');
// var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
// var mongoURI = process.env.MONGOURI || require('./config.js').databaseURI;

// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({extended: true}));

// mongoose.connect(mongoURI);

server.use(express.static(__dirname + '/public'));

server.get("/", function(request, response){
  response.sendFile("public/html/index.html", {root: __dirname});
});

server.get("/login", function(request, response){
  response.sendFile("public/html/login.html", { root: __dirname });
});

server.get("/signup", function(request, response){
  response.sendFile('public/html/signup.html', { root: __dirname });
});

server.get("/user", function(request, response){
  response.sendFile('public/html/user.html', { root: __dirname });
});

server.listen(port, function(){
  console.log("Now listening on port...", port);
});
