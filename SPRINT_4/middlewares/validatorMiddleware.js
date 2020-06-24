const {check, validationResult, body} = require('express-validator');
const fs = require('fs');
const userController = require ('../controllers/userController');


let validatorMiddleware =

[
    check('nombre')
        .isLength({min:1}).withMessage('El campo "nombre" debe estar completo')
        .trim(), //Eliminamos los espacios en blanco laterales
    check('apellido')
        .isLength({min:1}).withMessage('El campo "apellido" debe estar completo'),
    check('email')
        .isEmail().withMessage('Debe escribir un email válido')
        .normalizeEmail(), //Sanitiza el email
    check('password')
        .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres'),

  ]

  module.exports = validatorMiddleware