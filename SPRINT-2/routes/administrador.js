var express = require('express');
var router = express.Router();
var admController = require('../controllers/admController');

/* GET home page. */
router.get('/nuevoproducto', admController.nuevoProducto);

module.exports = router;