var Contact = require('./contacts.model');

module.exports = function  () {
  var contacts = require('./contacts.js').slice();
  
  function query (req, res) {
    Contact.find().exec()
      .then(contacts => res.status(200).send(contacts))
      .catch(err => res.status(500).send('Unable to access contacts collection'));
  }
  
  function remove (req, res) {
    Contact.findByIdAndRemove(req.params.id).exec()
      .then(data => res.status(200).send('Contact successfully removed'))
      .catch(err => res.status(500).send('Unable to remove contact'));
  }
  
  function reset (req, res) {
    Contact.remove()
      .then(data => Contact.create(require('./contacts.js')))
      .then(data => res.status(200).send('Successfully reset contacts collection'))
      .catch(err => res.status(500).send('Unable to reset contacts collection'));
  }
  
  function save (req, res) {
    var defImg = 'http://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user-400x400.png';
    req.body.img = req.body.img || defImg;
    var newContact = new Contact(req.body);
    
    newContact.save()
      .then(data => res.status(200).send('Contact successfully saved'))
      .catch(err => res.status(500).send('Unable to save contact'));
  }
  
  // public API
  return {
    query: query,
    remove: remove,
    reset: reset,
    save: save,
  };
};
