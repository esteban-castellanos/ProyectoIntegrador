const {check, validationResult, body} = require('express-validator');


let validatorProductMiddleware =
[
    check('nombreProduct')
        .isLength({min:5}).withMessage('El campo "nombre" debe estar completo y tener al menos 5 caracteres')
        .trim(), //Eliminamos los espacios en blanco laterales
    check('descCorta')
        .isLength({min:1}).withMessage('El campo "Descripción corta" debe estar completo.'),
    check('precio')
        .isLength({min:1}).withMessage('El campo "Precio" debe estar completo'),
//Acá falta validar la foto y los filtros
  ]

  module.exports = validatorProductMiddleware