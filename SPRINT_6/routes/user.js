var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
const path = require ('path');
const {check, validationResult, body} = require ('express-validator');
let validatorUserMiddleware = require ('../middlewares/validatorUserMiddleware');


/* Get Register. */
router.get('/register', userController.register);

/* Post Register. */
router.post('/register', validatorUserMiddleware, userController.createUser);

/* Get Login. */
router.get('/login', userController.login);

/* Post Login. */
router.post('/login', userController.processLogin);

/* Add a Carrito. */
router.post('/carrito', userController.carritoAdd);

/* Get Carrito. */
router.get('/carrito', userController.carrito);

/* Datos del ususario logueado */
router.get('/detalle', userController.detalleUsuario);

/* CERRAR SESION. */
router.get('/close', userController.close);

module.exports = router;