const fs = require('fs');

function administradorLogueado (req,res,next){

   if (req.session.usuarioLogueado != undefined){

      let archivoAdm=fs.readFileSync('data_administradores.json', {encoding: 'utf-8'});
        let administradores;
        if(archivoAdm == ""){
            administradores =[];
        } else {
            administradores = JSON.parse(archivoAdm);
        }

        let admin = null;
        administradores.forEach((elem, i) => {
          if (elem["email"] == req.session.usuarioLogueado.email) {
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
}

 module.exports = administradorLogueado;