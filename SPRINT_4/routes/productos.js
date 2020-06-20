var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productosController');
var multer = require('multer');
var fs =require('fs');
const {check, validationResult, body} = require ('express-validator');
//INICIO DISKSTORGE (PARA SUBIR ARCHIVOS)
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'tmp/fotoProducto')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })
//FIN LIBRERIA MULTER
var path = require('path');

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

/* DESDE ACA LO DE ROUTES--> ADMINISTRADOR.JS */



/* GET LISTADO DE PRODUCTOS */
router.get('/', productosController.listadoProductos);

/* GET LISTADO DE TIENDAS */
router.get('/tiendas', productosController.listadoTiendas);

/* SEARCH BY NAME PRODUCTOS. */
router.get('/search', productosController.get_searchProductos);

/* SEARCH BY NAME TIENDAS. */
router.get('/tiendas/search', productosController.get_searchTiendas);

/* GET NUEVO PRODUCTO. */
router.get('/nuevoproducto', productosController.nuevoProducto);

/* GET NUEVA TIENDA. */
router.get('/nuevatienda', productosController.nuevaTienda);

/* POST NUEVO PRODUCTO. */
router.post('/nuevoproducto',upload.any() ,productosController.crearProducto);

/* POST NUEVA TIENDA. */
router.post('/nuevatienda',upload.any() ,productosController.crearTienda);

/* GET EDITAR PRODUCTO. */
router.get('/editProducto/:codigo', productosController.get_editProducto);

/* PUT EDITAR PRODUCTO. */
router.put('/actualizarProducto/:codigo', upload.any(), productosController.put_editProducto);

/* GET EDITAR TIENDA. */
router.get('/editTienda/:codigo', productosController.get_editTienda);

/* PUT EDITAR TIENDA. */
router.put('/actualizarTienda/:codigo', upload.any(), productosController.put_editTienda);

/* DELETE ELIMINAR PRODUCTO */
router.delete('/:codigo', productosController.deleteProduct);

/* DELETE ELIMINAR TIENDA */
router.delete('/tiendas/:codigo', productosController.deleteTienda);



module.exports = router;