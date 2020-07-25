const fs = require('fs');
let db = require("../database/models");

const indexController = {

home: function (req,res){

    db.Tienda.findAll()
    .then(function(tiendas){
        return res.render('index', {tiendas:tiendas, user: req.session.usuarioLogueado});
    })
    .catch(function(e){
        console.log(e)
    });
},

search: function (req,res){

    db.Producto.findAll()
    .then(function(productos){
        let results = [];
        productos.forEach((prod, i) => {
            if (prod.name.toLowerCase().includes(req.query.nombre.toLowerCase().trim()) || prod.short_description.toLowerCase().includes(req.query.nombre.toLowerCase().trim())) {
            results.push(prod);
            }
        });
        if (results !== []){
        res.render('prodPorTienda', {productos: results, user: req.session.usuarioLogueado, search: req.query.nombre});
        }
    })
    .catch(function(e){
        console.log(e)
    });
},

}


module.exports = indexController