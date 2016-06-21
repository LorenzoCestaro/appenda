var express = require('express');
var controller = require ('./events.controller.js')();
var router = express.Router();

router.get('/', controller.query);
router.get('/reset', controller.reset);
router.get('/:id', controller.getEvent);
router.delete('/:id', controller.remove);
router.post('/', controller.save);
router.post('/:id', controller.update);

module.exports = {
  name: 'events',
  version: '0.1.0',
  router: router,
}