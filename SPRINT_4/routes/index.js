var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.home);

/* SEARCH por producto o tienda. */
router.get('/search', indexController.search);

module.exports = router;