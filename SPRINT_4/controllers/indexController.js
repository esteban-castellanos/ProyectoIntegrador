const fs =require('fs');

const indexController = {

home: function (req,res){
    let archivoTiendas=fs.readFileSync('data_tiendas.json', {encoding: 'utf-8'});
    let tiendas;
    if(archivoTiendas == ""){
        tiendas =[];
        } else {
        tiendas = JSON.parse(archivoTiendas);
    }

    res.render('index', {tiendas:tiendas});
},

}

module.exports = indexController