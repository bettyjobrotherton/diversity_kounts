var express = require('express');
var server = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userRouter = require('./server/routers/user.router.js');
var reportRouter = require('./server/routers/report.router.js');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./config.js').databaseURI;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(mongoURI);

server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res){
  res.sendFile('public/html/index.html', {root: __dirname});
});

server.get('/iv', function(req, res){
  res.sendFile('public/html/index-views.html', {root: __dirname});
});

server.get('/login', function(req, res){
  res.sendFile('public/html/login.html', {root: __dirname});
});

server.use(userRouter);
server.use(reportRouter);

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
