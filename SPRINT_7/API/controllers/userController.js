const fs = require('fs');
var path = require('path');
let db = require("../database/models");
const item_category = "Usuarios";

const userController = {

    //CREAR USUARIOS

    listadoUsuarios: function(req, res){

        db.Usuario.findAll()
        .then(function(usuarios){
            res.status(200).json({estado: 'OK', item_category, item_count: usuarios.length, items: usuarios})
        })
        .catch(function(e){
            console.log(e)
        })
    },

    detalleUsuario: function(req,res) {
        console.log(req.query.search_query);
        db.Usuario.findByPk(req.query.id)
        console.log(req.query.id)
            .then(function(usuario){
            res.status(200).json({estado: "OK", item_category, item_id: usuario.id, item: usuario})
            })
    }
}


    module.exports = userController;