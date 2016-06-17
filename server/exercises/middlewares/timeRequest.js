module.exports = function (req, res, next) {
  req.timeRequest = Date.now();
  next();
};