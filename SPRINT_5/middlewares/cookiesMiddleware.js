const fs = require('fs');


function cookiesMiddleware(req, res, next){
	if (req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined) {

        let archivoUsuario=fs.readFileSync('data_usuarios.json', {encoding: 'utf-8'});
        let usuarios;
        if(archivoUsuario == ""){
            usuarios =[];
        } else {
            usuarios = JSON.parse(archivoUsuario);
        }

        let user = null;
        usuarios.forEach((elem, i) => {
          if (elem["email"] == req.cookies.recordame) {
            user = elem;
          }
        })
        req.session.usuarioLogueado = user
        console.log(req.session.usuarioLogueado);
		}
    next();
	}

module.exports = cookiesMiddleware;
