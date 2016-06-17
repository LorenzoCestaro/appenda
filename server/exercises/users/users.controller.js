module.exports = function () {
  function query (req, res) {
    res.send([{name: 'Lorenzo', email: 'cestaro.lorenzo@gimail.com'}]);
  }
  
  // public API
  return {
   query: query,
  };
};