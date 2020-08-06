const fs = require('fs');
let db = require("../database/models");

function administradorLogueado(req,res,next){
   console.log(req.session.usuarioLogueado.category)
            if (req.session.usuarioLogueado != undefined){
                   if (req.session.usuarioLogueado.category == "adm") {
                     next()
                  } else {
                     res.render('not-found');
                  }
               } else {
            res.render('not-found');
            }
}

 module.exports = administradorLogueado;