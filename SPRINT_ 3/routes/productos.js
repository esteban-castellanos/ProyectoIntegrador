var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productosController')

/* Detalle del producto. */
router.get('/:idproducto', productosController.detalle);

module.exports = router;