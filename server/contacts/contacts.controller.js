var Contact = require('./contacts.model');

module.exports = function  () {
  var contacts = require('./contacts.js').slice();
  
  function query (req, res) {
    Contact.find().exec()
      .then(contacts => res.status(200).send(contacts))
      .catch(err => res.status(500).send('Unable to access contacts collection'));
  }
  
  function getContact (req, res) {
    req.checkParams('id').isMongoId();
    if (req.validationErrors()) return res.status(400).send('Bad request');
    
    Contact.findOne({_id: req.params.id}).exec()
      .then(contact => res.status(200).send(contact))
      .catch(err => res.status(500).send('Unable to access contact'));
  }
  
  function remove (req, res) {
    req.checkParams('id').isMongoId();
    if (req.validationErrors()) return res.status(400).send('Bad request');
    
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
    req.sanitizeBody('name').toString();
    req.sanitizeBody('surname').toString();
    req.sanitizeBody('phone').toString();
    req.sanitizeBody('email').toString();
    req.sanitizeBody('img').toString();
    
    req.checkBody('name').isLength({min: 1, max: undefined});
    req.checkBody('surname').isLength({min: 1, max: undefined});
    req.checkBody('phone').isNumeric().isLength({min: 9, max: 10});
    if (req.body.email) req.checkBody('email').isEmail();
    if (req.body.img) req.checkBody('img').isURL();
    
    if (req.validationErrors()) return res.status(400).send('Bad request!');
    
    var defImg = 'http://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user-400x400.png';
    req.body.img = req.body.img || defImg;
    var newContact = new Contact(req.body);
    
    newContact.save()
      .then(data => res.status(201).send('Contact successfully saved'))
      .catch(err => res.status(500).send('Unable to save contact'));
  }
  
  function update (req, res) {
    req.checkParams('id').isMongoId();
    if (req.validationErrors()) return res.status(400).send('Bad request');
    
    req.sanitizeBody('name').toString();
    req.sanitizeBody('surname').toString();
    req.sanitizeBody('phone').toString();
    req.sanitizeBody('email').toString();
    req.sanitizeBody('img').toString();
    
    req.checkBody('name').isLength({min: 1, max: undefined});
    req.checkBody('surname').isLength({min: 1, max: undefined});
    req.checkBody('phone').isNumeric().isLength({min: 9, max: 10});
    if (req.body.email) req.checkBody('email').isEmail();
    if (req.body.img) req.checkBody('img').isURL();
    
    if (req.validationErrors()) return res.status(400).send('Nice try David!');
    
    Contact.findByIdAndUpdate(req.params.id, {$set: req.body})
      .then(data => res.status(200).send('Contact successfully updated'))
      .catch(err => res.status(500).send('Unable to update contact'))
  }
  
  
  // public API
  return {
    query: query,
    getContact: getContact,
    remove: remove,
    reset: reset,
    save: save,
    update: update,
  };
};
