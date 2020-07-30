const fs = require('fs');
var path = require('path');
let db = require("../database/models");
const item_category = "Usuarios";

const userController = {

    //CREAR USUARIOS

    listadoUsuarios: function(req, res){
//Acá falta eliminar password y category y agregar url de cada usuario.
         db.Usuario.findAll({attributes: ['id','first_name', 'last_name', 'email']})
            .then(function(usuarios){
            for(let i = 0; i < usuarios.length; i++){
                usuarios[i].setDataValue("detail", "http://localhost:3000/api/users/" + usuarios[i].id)
            }

            res.status(200).json({link: 'http://localhost:3000/api/users', estado: 'OK', item_category, item_count: usuarios.length, items: usuarios})
        })
        .catch(function(e){
            console.log(e)
        })
    },

    detalleUsuario: function(req,res) {
        db.Usuario.findByPk(req.params.id, {attributes: ['id','first_name', 'last_name', 'email']})
            .then(function(usuario){
            res.status(200).json({link: 'http://localhost:3000/api/users', estado: "OK", item_category, item_id: usuario.id, item: usuario})
            })
    }
}

    module.exports = userController;