module.exports = function () {
  var User = require('./users.model');
  
  function query (req, res) {
    User.find().exec()
      .then(users => res.status(200).json(users))
      .catch(err => res.status(500).send('Cannot read users from db'));
  }
  
  function create (req, res) {
    var newUser = new User(req.body);
    newUser.save()
      .then(user => res.status(201).send('User successfully created'))
      .catch(err => res.status(500).send('Cannot save user in db'));
  }
  
  function remove (req, res) {
    User.findByIdAndRemove(req.params.id)
      .then(user => res.status(200).send('Users successfully removed'))
      .catch(err => res.status(500).send('Cannot remove user from db'));
  }
  
  function update (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: {name: req.body.name}})
      .then(user => res.status(200).send('User successfully updated'))
      .catch(err => res.status(500).send('Cannot update user'));
  }
  
  // public API
  return {
   query: query,
   create: create,
   remove: remove,
   update: update,
  };
};