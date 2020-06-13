var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productosController')

/* GET home page. */
router.get('/:idproducto', productosController.detalle);

module.exports = router;