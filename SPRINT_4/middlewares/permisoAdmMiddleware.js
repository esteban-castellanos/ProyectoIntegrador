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

        console.log(administradores);
        console.log(req.session.usuarioLogueado);

        let admin = null;
        administradores.forEach((elem, i) => {
          if (elem["email"] == req.session.usuarioLogueado.email) {
            admin = elem;
          }
        })
         if(admin != null){
            next();
         } else {
            res.render('sinPermisos')
         }

      } else {

   res.send('Necesita loguearse para poder acceder a esta página.')

   }
}

 module.exports = administradorLogueado;