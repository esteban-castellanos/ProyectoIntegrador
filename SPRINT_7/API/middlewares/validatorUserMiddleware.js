const {check, validationResult, body} = require('express-validator');


let validatorUserMiddleware =
[
    check('nombre')
        .isLength({min:2}).withMessage('El campo "nombre" debe estar completo y tener al menos 2 caracteres')
        .trim(), //Eliminamos los espacios en blanco laterales
    check('apellido')
        .isLength({min:2}).withMessage('El campo "apellido" debe estar completo y tener al menos 2 caracteres'),
    check('email')
        .isEmail().withMessage('Debe escribir un email válido')
        .normalizeEmail(), //Sanitiza el email
    check('password')
        .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
  ]

  module.exports = validatorUserMiddleware