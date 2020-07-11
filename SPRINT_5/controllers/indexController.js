const fs = require('fs');
const db = require('../database/models');
const { SELECT } = require('sequelize/types/lib/query-types');
const sequelize = db.sequelize;

const indexController = {

home: function (req,res){

sequelize.query('SELECT * FROM stores')
    .then(function(resultados){

        let tiendas = resultados[0];

        res.render('index', {tiendas:tiendas, user: req.session.usuarioLogueado});
    })

},

search: function (req,res){

    let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
            let productos;
            if(archivoProductos == ""){
                productos =[];
            } else {
                productos = JSON.parse(archivoProductos);
            }

    let results = [];
        productos.forEach((prod, i) => {
            if (prod.nombreProducto.includes(req.query.nombre,)) {
            results.push(prod);
            } else {
            }
            });

        if (results !== []){
        res.render('prodPorTienda', {productos: results, user: req.session.usuarioLogueado});
        }
        },

}


module.exports = indexController