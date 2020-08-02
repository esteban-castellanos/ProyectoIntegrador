var express = require('express');
var router = express.Router();
var storesController = require('../controllers/storesController');

/* GET LISTADO DE TIENDAS */
router.get('/', storesController.listadoTiendas);

module.exports = router;