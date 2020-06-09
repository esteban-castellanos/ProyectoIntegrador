var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
const path = require ('path');
const {check, validationResult, body} = require ('express-validator');


/* Get Register. */
router.get('/register', userController.register);

/* Post Register. */
router.post('/register', [
    check('nombre').isLength({min:1}).withMessage('El campo "nombre" debe estar completo'),
    check('apellido').isLength({min:1}).withMessage('El campo "apellido" debe estar completo'),
    check('email').isEmail().withMessage('Debe escribir un email válido'),
    check('password').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
  ], userController.createUser);

/* Get Login. */
router.get('/login', userController.login);

/* Post Login. */
router.post('/login', userController.processLogin);

/* Get Carrito. */
router.get('/carrito', userController.carrito);

module.exports = router;