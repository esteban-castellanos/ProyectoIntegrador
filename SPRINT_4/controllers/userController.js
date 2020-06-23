const fs = require('fs');
const {check, validationResult, body} = require ('express-validator');
const bcrypt = require('bcrypt');
var path = require('path');


const userController = {

// Busca un usuario por su email
    searchByEmail: function (email) {
        let archivoJson = readJSONfile();
        let user = null;
        archivoJson.forEach((elem, i) => {
          if (elem["email"] == email) {
            user = elem;
          }
        });
        return user; // si no lo encuentra devuelve null
      },

    register: function (req,res){
        res.render('register');
    },

    //CREAR USUARIOS

    createUser: function(req, res){
        let errors = validationResult(req);
            if (errors.isEmpty()){
            let usuario = {
            nombre: req.body.nombre,
            edad: req.body.edad,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            }

        //1ºLeer el archivo
        let archivoUsuario=fs.readFileSync('data_usuarios.json', {encoding: 'utf-8'});
        let usuarios;
        if(archivoUsuario == ""){
            usuarios =[];
        } else {
            usuarios = JSON.parse(archivoUsuario);
        }
         //agregamos el usuarios Nuevo
         usuarios.push(usuario);
         //Escribir el archivo
          usuariosJSON = JSON.stringify(usuarios);

        fs.writeFileSync('data_usuarios.json', usuariosJSON);

        mensaje = "El usuario se ha creado correctamente! Haga click en el logo para seguir navegando.";
        return res.render("register",{mensaje: mensaje});
        } else {

        return res.render('register', {errors: errors.errors});
        }
    },


    //LOGIN DE USUARIOS VISTA
    login: function (req,res){
        res.render('login')
    },
    //VALIDACION DE USUARIOS
    processLogin: function(req,res){

        let archivoUsuario=fs.readFileSync('data_usuarios.json', {encoding: 'utf-8'});
        let usuarios;
        if(archivoUsuario == ""){
            usuarios =[];
        } else {
            usuarios = JSON.parse(archivoUsuario);
        }

        let user = null;
        usuarios.forEach((elem, i) => {
          if (elem["email"] == req.body.email) {
            user = elem;
          }
        })

        if (user != null){
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.redirect ('/index')
            } else {
            let mensaje = "Contraseña Inválida"
            res.render ('login', {contraseñainv:mensaje});
            }
        } else {
            let mensaje = "Mail inválido"
            res.render ('login', {mailinv:mensaje});
        }
        },

    carrito: function (req,res){

        let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
        let productos;
        if(archivoProductos == ""){
            productos =[];
            } else {
            productos = JSON.parse(archivoProductos);
        }
        productos.forEach((prod, i) => {
            if (prod.codigo == req.params.codigo){
                producto = prod;
                }
        });

        console.log(req.params.segundaOpcion);

        res.render('productCar', {producto:producto});
    },
}

    module.exports = userController;