module.exports = function () {
  
  function query(req, res) {
    console.log(req.timeRequest);
    res.status(200).send([{name: 'Ascia Bipenne', description: 'A nice description.'}]);
  }
  
  function save(req, res) {
    console.log(req.body);
    res.status(201).send({result: 'Item ' + req.body.name + ' created!'});
  }
  
  
  // public API
  return {
    query: query,
    save: save,
  };
}