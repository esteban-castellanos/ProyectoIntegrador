var express = require('express');
var router = express.Router();
var tiendasController = require('../controllers/tiendasController');

/* GET tiendas listing. */
router.get('/:idtienda', tiendasController.productos)

module.exports = router;
