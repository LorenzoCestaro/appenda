var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
  name: String,
  surname: String,
  phone: String,
  email: String,
  img: String,
});

var Contacts = mongoose.model('Contact', contactSchema);

module.exports = Contacts;