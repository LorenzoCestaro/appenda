module.exports = function () {
  var events = require('./events.js').slice();
  
  var index = function (id) {
    return events.indexOf(events.find(singleEvent => singleEvent.id === parseInt(id)));
  };
  
  function query (req, res) {
   res.status(200).send(events);
    
  };
  
  function remove (req, res) {
    if(index(req.params.id) < 0) res.status(404).send('Event non found')
    events.splice(index(req.params.id), 1);
    res.status(200).send();
  };
  
  function reset (req, res){
    events = require('./events.js').slice();
    res.status(200).send('Events reset');
  }
  
  function save (req, res){
    req.body.id = events.length;
    req.body.location = req.body.location || 'Insert event location';
    events.push(req.body);
    res.status(200).send('Record saved');
  }
  
  // public API
  return {
    query: query,
    remove: remove,
    reset: reset,
    save: save,
  };
};