var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');
var multer = require('multer');
var permisoAdmMiddleware = require ("../middlewares/permisoAdmMiddleware");
let validatorProductMiddleware = require ('../middlewares/validatorProductMiddleware');


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
router.get('/porTienda/:codigo', productsController.productosPorTienda);

/* GET productos por organicos */
router.get('/organicos', productsController.productosOrganicos);

/* GET productos por sin Tacc */
router.get('/sinTacc', productsController.productosSinTacc);

/* GET productos sin Lactosa */
router.get('/sinLactosa', productsController.productosSinLactosa);

/* GET detalle del producto */
router.get('/detalleProducto/:codigo', productsController.detalleProducto);

/* DESDE ACA LO DE ROUTES--> ADMINISTRADOR.JS */


/* GET LISTADO DE PRODUCTOS */
router.get('/', permisoAdmMiddleware, productsController.listadoProductos);

/* GET LISTADO DE TIENDAS */
router.get('/tiendas', permisoAdmMiddleware, productsController.listadoTiendas);

/* SEARCH BY NAME PRODUCTOS. */
router.get('/search', permisoAdmMiddleware, productsController.get_searchProductos);

/* SEARCH BY NAME TIENDAS. */
router.get('/tiendas/search', permisoAdmMiddleware, productsController.get_searchTiendas);

/* GET NUEVO PRODUCTO. */
router.get('/nuevoproducto', permisoAdmMiddleware, productsController.nuevoProducto);

/* GET NUEVA TIENDA. */
router.get('/nuevatienda', permisoAdmMiddleware, productsController.nuevaTienda);

/* POST NUEVO PRODUCTO. */
router.post('/nuevoproducto', permisoAdmMiddleware, upload.any(), validatorProductMiddleware, productsController.crearProducto);

/* POST NUEVA TIENDA. */
router.post('/nuevatienda', permisoAdmMiddleware, upload.any() ,productsController.crearTienda);

/* GET EDITAR PRODUCTO. */
router.get('/editProducto/:codigo', permisoAdmMiddleware, productsController.get_editProducto);

/* PUT EDITAR PRODUCTO. */
router.put('/actualizarProducto/:codigo', permisoAdmMiddleware, upload.any(), validatorProductMiddleware, productsController.put_editProducto);

/* GET EDITAR TIENDA. */
router.get('/editTienda/:codigo', permisoAdmMiddleware, productsController.get_editTienda);

/* PUT EDITAR TIENDA. */
router.put('/actualizarTienda/:codigo', permisoAdmMiddleware, upload.any(), productsController.put_editTienda);

/* DELETE ELIMINAR PRODUCTO */
router.delete('/:codigo', permisoAdmMiddleware, productsController.deleteProduct);

/* DELETE ELIMINAR TIENDA */
router.delete('/tiendas/:codigo', permisoAdmMiddleware, productsController.deleteTienda);



module.exports = router;