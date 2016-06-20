var express = require('express');
var controller = require('./contacts.controller.js')();
var router = express.Router();

router.get('/', controller.query);
router.delete('/:id', controller.remove);
router.get('/reset', controller.reset);
router.post('/', controller.save);

module.exports = {
  name: 'contacts',
  router: router,
  version: '0.1.0',
};