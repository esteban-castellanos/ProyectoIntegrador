const fs =require('fs');
var path = require('path');
let db = require("../database/models");
const item_category = "Tiendas";

const storesController = {

listadoTiendas: function (req,res){
    db.Tienda.findAll()
        .then(function(tiendas){
            for(let i = 0; i < tiendas.length; i++){
                tiendas[i].setDataValue("detail", "http://localhost:3000/api/users/" + tiendas[i].id)
            }
            let respuesta = {
                meta: {
                    link: 'http//localhost:3030/api/products/tiendas',
                    estado: "OK",
                    item_category: item_category,
                    item_count: tiendas.length
                },
                data: {
                    tiendas
                }
            }
            res.status(200).json(respuesta);
        })
        .catch(function(e){
            console.log(e)
        });
},
}

module.exports = storesController;