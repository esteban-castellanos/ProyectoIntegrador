const {check, validationResult, body} = require('express-validator');
var multer = require('multer');
const path = require ('path');

let validatorProductMiddleware =
[
    check('nombreProduct')
        .isLength({min:5}).withMessage('El campo "nombre" debe estar completo y tener al menos 5 caracteres')
        .trim(), //Eliminamos los espacios en blanco laterales
    check('descCorta')
        .isLength({min:15}).withMessage('El campo "Descripción corta" debe estar completo y tener al menos 15 caracteres.'),
    check('precio')
        .isLength({min:1}).withMessage('El campo "Precio" debe estar completo'),
        //Falta corregir esta validación.
    body("fotoProducto").custom(function(req){
        var ext = path.extname(req.files[0].originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg'){
            return false
        } else{
            return true
        }
        }).withMessage('Debe subir una imagen válida.')
]

  module.exports = validatorProductMiddleware