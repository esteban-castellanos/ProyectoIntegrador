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
    /*body('email').custom(function(valor){ //Chequeamos que el mail no exista ya en la base de datos.
        let exist = userController.searchByEmail(valor);
        if (exist == null) {
        return true;
            }else{
        return false;
        }
        }).withMessage('Este email ya se encuentra registrado. Pruebe con otro email.'),*/
  ]

  module.exports = validatorMiddleware