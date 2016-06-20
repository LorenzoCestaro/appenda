console.log('This file contains mongodb exercises');

var settings = require('./settings');  // get settings.json (ignored by git) where db url is stored
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');  // angular-like promise syntax for mongoose promises
mongoose.connect(settings.mongoUrl, function (err) {
  if (!err) console.info('Connection with the database is ok');
});

// Instantiate new collection and relative schema
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  surname: String,
  birthday: Date,
  updatedAt: Date,
});

// Add methods to every collection document
userSchema.methods.greet = function (name) {
  console.log('Hello ' + name + ' from ' + this.name + '!');
};
userSchema.methods.sayAge = function () {
  var today = new Date();
  var age = today.getFullYear() - this.birthday.getFullYear();
  console.log('I am ' + age + ' years old')
};

// Add middlewares
userSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  var err;
  if (this.name.length < 2) err = new Error('Name must be at least two characters');
  next(err);
});

// Create collection with name 'User' and schema 'userSchema'
var User = mongoose.model('User', userSchema);

// Instantiate new collection item
var bob = new User({
  name: 'Bob Eastwood',
  birthday: new Date(1990, 2, 17),
});

console.log(bob.id, '=', bob._id);

// Test methods
//john.greet('Anna');
//john.sayAge();

//CREATE save entry (promise syntax available)
// bob.save()
//   .then(() => console.log('User successfully saved'))
//   .catch(err => console.error('Error in saving the user: ' + err));

// READ from db: Collection.find() returns a query that must be executed with .exec()
// .findOne() returns only the first matching object, wrapped by .findById()
User.find({name: 'Bob Eastwood'}).exec()
  .then(users => console.info(users))
  .catch(err => console.error(err));
  
User.findOne({name: 'Bob Eastwood'}).exec()
  .then((user) => {
    console.info(user);
    user.greet('Lorenzo');
  })
  .catch(err => console.error(err));
  
// UPDATE
User.findOne({name: 'John Snow'}).exec()
  .then((user) => {
    user.name = 'John';
    user.surname = 'Snow';
    return user.save();
  })
  .then(data => console.log('User successfully updated'))
  .catch(err => console.error(err));
  
// User.findByIdAndUpdate('id_string' {property: 'to update'}).exec()

// DELETE
// User.findOne({name: 'Bob'}).exec()
//   .then((user) => {
//     return user.remove();
//   })
//   .then(data => console.log('User successfully removed'))
//   .catch(err => console.error(err));

// User.findByIdAndRemove('id_string' {property: 'to update'}).exec()

// Server setup
var express = require('express');
var app = express();

app.listen(8080, function () {
  console.info('My server is up and running');
})