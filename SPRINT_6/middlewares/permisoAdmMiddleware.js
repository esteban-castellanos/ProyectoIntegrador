const fs = require('fs');
let db = require("../database/models");

function administradorLogueado(req,res,next){

      db.Usuario.findAll({
         where: {category: "adm"}
         })
         .then(function(administradores){

            if (req.session.usuarioLogueado != undefined){
                 let admin = null;
                 administradores.forEach((elem, i) => {
                   if (elem.email = req.session.usuarioLogueado.email) {
                     admin = elem;
                   }
                 })
                  if(admin != null){
                     next();
                  } else {
                     res.render('not-found');
                  }
               } else {
            res.render('not-found');
            }
         })
}

 module.exports = administradorLogueado;