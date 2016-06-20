var Event = require('./events.model')

module.exports = function () {
  
  function query (req, res) {
    Event.find().exec()
      .then(events => res.status(200).send(events))
      .catch(err => res.status(500).send('Unable to access events collection'))
  }
  
  function remove (req, res) {
    Event.findByIdAndRemove(req.params.id).exec()
      .then(data => res.status(200).send('Event successfully removed'))
      .catch(err => res.status(500).send('Unable to remove event'));
  }
  
  function reset (req, res){
    Event.remove()
      .then(data => Event.create(require('./events.js')))
      .then(data => res.status(200).send('Successfully reset events collection'))
      .catch(err => res.status(500).send('Unable to reset db'))
  }
  
  function save (req, res){
    var newEvent = new Event(req.body);
    newEvent.save()
      .then(data => res.status(200).send('Event successfully saved'))
      .catch(err => res.status(500).send('Unable to save any event'))
  }
  
  // public API
  return {
    query: query,
    remove: remove,
    reset: reset,
    save: save,
  };
};