var Event = require('./events.model')

module.exports = function () {
  
  function query (req, res) {
    Event.find().exec()
      .then(events => res.status(200).send(events))
      .catch(err => res.status(500).send('Unable to access events collection'))
  }
  
  function getEvent (req, res) {
    req.checkParams('id').isMongoId();
    if (req.validationErrors()) return res.status(400).send('Bad request');
    
    Event.findOne({_id: req.params.id}).exec()
      .then(event => res.status(200).send(event))
      .catch(err => res.status(500).send('Unable to access event'));
  }
  
  function remove (req, res) {
    req.checkParams('id').isMongoId();
    if (req.validationErrors()) return res.status(400).send('Bad request');
    
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
    req.sanitizeBody('date').toDate();
    req.sanitizeBody('time').toDate();
    
    req.checkBody('title').isLength({min: 1, max: undefined});
    req.checkBody('date').isDate();
    req.checkBody('time').isDate();
    
    if (req.validationErrors()) return res.status(400).send('Bad request');

    var newEvent = new Event(req.body);
    newEvent.save()
      .then(data => res.status(200).send('Event successfully saved'))
      .catch(err => res.status(500).send('Unable to save any event'))
  }
  
  function update (req, res){
    req.checkParams('id').isMongoId();
    if (req.validationErrors()) return res.status(400).send('Bad request');
    
    req.sanitizeBody('date').toDate();
    req.sanitizeBody('time').toDate();
    
    req.checkBody('title').isLength({min: 1, max: undefined});
    req.checkBody('date').isDate();
    req.checkBody('time').isDate();
    
    if (req.validationErrors()) return res.status(400).send('Bad request');
    
    Event.findByIdAndUpdate(req.params.id, {$set: req.body})
    .then(data => res.status(200).send('Event successfully updated'))
    .catch(err => res.status(500).send('Unable to update event'))
  }
  
  // public API
  return {
    query: query,
    getEvent: getEvent,
    remove: remove,
    reset: reset,
    save: save,
    update: update,
  };
};