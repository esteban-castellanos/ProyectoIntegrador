const {check, validationResult, body} = require('express-validator');
var multer = require('multer');
const path = require ('path');

let validatorProductMiddleware =
[
    check('nombreProduct')
        .isLength({min:5}).withMessage('El campo "nombre" debe estar completo y debe tener al menos 5 caracteres.')
        .trim(), //Eliminamos los espacios en blanco laterales
    check('descCorta')
        .isLength({min:10}).withMessage('El campo "Descripción corta" debe estar completo y tener al menos 10 caracteres.'),
    check('precio')
        .isLength({min:1}).withMessage('El campo "Precio" debe estar completo'),
]

  module.exports = validatorProductMiddleware