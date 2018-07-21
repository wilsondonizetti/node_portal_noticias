var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var consign = require('consign');

server.set('view engine', 'ejs');
server.set('views', './app/views');

server.use(express.static('./app/public'))
server.use(bodyParser.urlencoded({extended: true}));
server.use(expressValidator());

consign()
.include('app/routes')
.then('config/database.js')
.then('app/models')
.then('app/controllers')
.into(server);

module.exports = server;