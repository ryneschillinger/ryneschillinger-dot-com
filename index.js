var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');

// APP VARIABLES
// var db = require('./models'); 
var app = express();

// SET/USE STATEMENTS
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));
app.use(express.static('files'));


// ROUTES

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/grcc', function(req, res) {
  res.render('grcc');
});

app.listen(3000);