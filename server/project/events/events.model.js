var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var eventSchema = new Schema({
  title: String,
  date: Date,
  time: Date,
  location: String,
  bindedContacts: Array,
  notes: String,
})

// Collection -> E' il nostro db
var Events = mongoose.model('Event', eventSchema);

module.exports = Events;