const fs =require('fs');
var path = require('path');
let db = require("../database/models");
const item_category = "Productos";

const productsController = {

    listadoProductos: function (req,res){
        db.Producto.findAll({
            include: [{association: "categorias"},{association: "tienda"}],
        })
            .then(function(productos){
                for(let i = 0; i < productos.length; i++){
                productos[i].setDataValue("detail", "http://localhost:3000/api/users/" + productos[i].id)
            }

                let respuesta = {
                    meta: {
                        link: 'http://localhost:3030/api/products',
                        estado: "OK",
                        item_category: item_category,
                        item_count: productos.length
                    },
                    data: {
                        productos
                    }
                }
                res.status(200).json(respuesta);
            })
            .catch(function(e){
                console.log(e)
            });
    },

    detalleProducto: function(req,res){
            db.Producto.findByPk(req.params.id,{
                include: ["tienda"]
            })

                .then(function(producto){
                    let respuesta = {
                        meta: {
                            link: `http://localhost:3030/api/products/{req.params.id}`,
                            estado: "OK",
                            item_category: item_category,
                        },
                        data: {
                            producto
                        }
                    }
                    res.status(200).json(respuesta)
                })
                .catch(function(e){
                    console.log(e)
                });
    },
}

    module.exports = productsController;
