var express = require('express');
var controller = require('./contacts.controller.js')();
var router = express.Router();

router.get('/', controller.query);
router.get('/reset', controller.reset);
router.get('/:id', controller.getContact);
router.delete('/:id', controller.remove);
router.post('/', controller.save);
router.post('/:id', controller.update);

module.exports = {
  name: 'contacts',
  router: router,
  version: '0.1.0',
};