var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/index', indexController.home);

/* GET productos por tienda. */
router.get('/:idtienda', indexController.productosPorTienda);

module.exports = router;