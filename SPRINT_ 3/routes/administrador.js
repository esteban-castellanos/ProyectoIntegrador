var express = require('express');
var router = express.Router();
var admController = require('../controllers/admController');
var multer = require('multer');
var fs =require('fs');

//INICIO DISKSTORGE (PARA SUBIR ARCHIVOS)
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'tmp/fotoProducto')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  var upload = multer({ storage: storage }) 
//FIN LIBRERIA MULTER
var path = require('path');


/* GET LISTADO DE PRODUCTOS */
router.get('/productos', admController.listadoProductos);

/* GET LISTADO DE TIENDAS */
router.get('/tiendas', admController.listadoTiendas);

/* SEARCH BY NAME PRODUCTOS. */
router.get('/productos/search', admController.get_searchProductos);

/* SEARCH BY NAME TIENDAS. */
router.get('/tiendas/search', admController.get_searchTiendas);

/* GET NUEVO PRODUCTO. */
router.get('/nuevoproducto', admController.nuevoProducto);

/* GET NUEVA TIENDA. */
router.get('/nuevatienda', admController.nuevaTienda);

/* POST NUEVO PRODUCTO. */
router.post('/nuevoproducto',upload.any() ,admController.crearProducto);

/* POST NUEVA TIENDA. */
router.post('/nuevatienda',upload.any() ,admController.crearTienda);

/* GET EDITAR PRODUCTO. */
router.get('/editProducto/:codigo', admController.get_editProducto);

/* PUT EDITAR PRODUCTO. */
router.put('/actualizarProducto/:codigo', upload.any(), admController.put_editProducto);

/* GET EDITAR PRODUCTO. */
router.get('/editTienda/:codigo', admController.get_editTienda);

/* PUT EDITAR PRODUCTO. */
router.put('/actualizarTienda/:codigo', upload.any(), admController.put_editTienda);

/* DELETE ELIMINAR PRODUCTO */
router.delete('/productos/:codigo', admController.deleteProduct);

/* DELETE ELIMINAR TIENDA */
router.delete('/tiendas/:codigo', admController.deleteTienda);


module.exports = router;