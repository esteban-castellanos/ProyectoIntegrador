var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* Get Listado Usuarios */
router.get('/', userController.listadoUsuarios);

/* Datos del ususario logueado */
router.get('/:idUsuario', userController.detalleUsuario);


module.exports = router;