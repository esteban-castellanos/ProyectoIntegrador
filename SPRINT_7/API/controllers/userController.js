const fs = require('fs');
var path = require('path');
let db = require("../database/models");
const item_category = "Usuarios";

const userController = {

    //CREAR USUARIOS

    listadoUsuarios: function(req, res){
         db.Usuario.findAll({attributes: ['id','first_name', 'last_name', 'email']})
            .then(function(usuarios){
            for(let i = 0; i < usuarios.length; i++){
                usuarios[i].setDataValue("detail", "http://localhost:3000/api/users/" + usuarios[i].id)
            }

            let respuesta = {
                meta: {
                    link: 'http://localhost:3030/api/users',
                    estado: "OK",
                    item_category: item_category,
                    item_count: usuarios.length
                },
                data: {
                    usuarios
                }
            }

            res.status(200).json(respuesta)
        })
        .catch(function(e){
            console.log(e)
        })
    },

    detalleUsuario: function(req,res) {
        db.Usuario.findByPk(req.params.id, {attributes: ['id','first_name', 'last_name', 'email']})
            .then(function(usuario){

                let respuesta = {
                    meta: {
                        link: 'http://localhost:3030/api/users/'+usuario.id,
                        estado: "OK",
                        item_category: item_category,
                        item_id: usuario.id
                    },
                    data: {
                        usuario
                    }
                }

            res.status(200).json({respuesta})
            })
    }
}

    module.exports = userController;