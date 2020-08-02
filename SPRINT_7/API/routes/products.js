var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');


/* GET LISTADO DE PRODUCTOS */
router.get('/', productsController.listadoProductos);

/* GET detalle del producto */
router.get('/:id', productsController.detalleProducto);

module.exports = router;