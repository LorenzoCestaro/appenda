//console.log('Hello World from a ' + process.env.NODE_ENV + ' environment!' );

// relative paths starts by ./ while absolute paths are sought for in the
// node_modules folder
//var myModule = require('./exercises/myModule')({robot: 'Amilcare'});

//console.log(myModule.sayHello('Lorenzo'));

// web server setup
// var http = require('http');

// var server = http.createServer(function (req, res) {
//   res.write('<h1> Raffaele merda</h1>');
//   res.end();
// });

// server.listen(8080, '0.0.0.0', function () {
//   console.log('The server is up and running!');
// });

// express server setup

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<h1>First server running!</h1>');
  //res.redirect('/users')
});

// API to reverse a string
app.get('/reverse/:string', function (req, res) {
  var input = req.params.string;
  var output = input.split('').reverse().join('');
  if (req.query.uppercase !== 'false') output = output.toUpperCase();
  if (req.query.spaced) output = output.split('').join(' ');;
  res.send(output);
});

// router definition and attachment to the app
var users = require('./exercises/users');
app.use('/users', users.router);

var items = require('./exercises/items');
app.use('/items', items.router);

app.listen(8080, function () {
  console.log('Server up and running!');
});
