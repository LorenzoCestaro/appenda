var express = require('express');
var router = express.Router();
var controller = require('./users.controller')();

router.get('/', controller.query);
router.post('/', controller.create);
router.delete('/:id', controller.remove);
router.put('/:id', controller.update);

module.exports = {
  name: 'Users router',
  version: '0.1.0',
  router: router,
};
