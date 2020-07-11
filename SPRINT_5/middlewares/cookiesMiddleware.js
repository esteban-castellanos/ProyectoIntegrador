const fs = require('fs');
let db = require("../database/models");


function cookiesMiddleware(req, res, next){
	if (req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined) {

      db.Usuario.findOne({
        where: {email: req.cookies.recordame}
      })
        .then(function(usuario){

          req.session.usuarioLogueado = usuario

        })
		}
    next();
	}

module.exports = cookiesMiddleware;
