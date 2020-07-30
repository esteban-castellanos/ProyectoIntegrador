var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');


/* GET LISTADO DE PRODUCTOS */
router.get('/', productsController.listadoProductos);

/* GET detalle del producto */
router.get('/:idProducto', productsController.detalleProducto);

/* GET LISTADO DE TIENDAS */
//router.get('/tiendas', productsController.listadoTiendas);

/* GET LISTADO DE CATEGORIAS */
//router.get('/categorias', productsController.categorias);

module.exports = router;