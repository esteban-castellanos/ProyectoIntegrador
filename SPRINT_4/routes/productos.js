var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productosController')

/* Detalle del producto. */
//router.get('/:idproducto', productosController.detalle);

/* GET productos por tienda. */
router.get('/porTienda/:codigo', productosController.productosPorTienda);

/* GET productos por organicos */
router.get('/organicos', productosController.productosOrganicos);

/* GET productos por sin Tacc */
router.get('/sinTacc', productosController.productosSinTacc);

/* GET productos sin Lactosa */
router.get('/sinLactosa', productosController.productosSinLactosa);

/* GET detalle del producto */
router.get('/detalleProducto/:codigo', productosController.detalleProducto);

module.exports = router;