module.exports = function  () {
  var contacts = require('./contacts.js').slice();
  
  var index = function (id) {
    return contacts.indexOf(contacts.find(singleContact => singleContact.id === parseInt(id)));
  };
  
  function query (req, res) {
    res.status(200).send(contacts);
  }
  
  function remove (req, res) {
    console.log(index(req.params.id));
    if (index(req.params.id) < 0) res.status(404).send('Contact not found');
    contacts.splice(index(req.params.id), 1);
    res.status(200).send();
  }
  
  function reset (req, res) {
    contacts = require('./contacts.js').slice();
    res.status(200).send('Contacts reset');
  };
  
  function save (req, res) {
    var defImg = 'http://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user-400x400.png';
    req.body.img = req.body.img || defImg;
    req.body.id = contacts.length;
    contacts.push(req.body);
    res.status(201).send('Record saved');
  }
  
  // public API
  return {
    query: query,
    remove: remove,
    reset: reset,
    save: save,
  };
};
