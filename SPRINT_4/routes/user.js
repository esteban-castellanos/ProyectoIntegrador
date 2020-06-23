var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
const path = require ('path');
const {check, validationResult, body} = require ('express-validator');
let validatorMiddleware = require ('../middlewares/validatorMiddleware');


/* Get Register. */
router.get('/register', userController.register);

/* Post Register. */
router.post('/register', validatorMiddleware, userController.createUser);

/* Get Login. */
router.get('/login', userController.login);

/* Post Login. */
router.post('/login', userController.processLogin);

/* Get Carrito. */
router.get('/carrito/:codigo', userController.carrito);

module.exports = router;