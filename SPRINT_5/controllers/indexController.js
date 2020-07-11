const fs = require('fs');
let db = require("../database/models");

const indexController = {

home: function (req,res){

    db.Tienda.findAll()
    .then(function(tiendas){
        return res.render('index', {tiendas:tiendas, user: req.session.usuarioLogueado});
    })

},

search: function (req,res){

    db.Producto.findAll()
    .then(function(productos){
        let results = [];
        productos.forEach((prod, i) => {
            if (prod.name.includes(req.query.nombre)) {
            results.push(prod);
            }
        });
        if (results !== []){
        res.render('prodPorTienda', {productos: results, user: req.session.usuarioLogueado});
        }
    })
},

}


module.exports = indexController