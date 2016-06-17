module.exports = function (req, res, next) {
  console.log(req.headers['x-forwarded-for']);
  var ip = req.headers['x-forwarded-for'].split('.');
  if (ip[3] % 2 === 0) return next();
  res.status(400).send('Fuck off!');
};