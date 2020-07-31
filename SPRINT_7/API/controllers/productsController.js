const fs =require('fs');
var path = require('path');
let db = require("../database/models");
const item_category = "Productos";

const productsController = {

    listadoProductos: function (req,res){
        db.Producto.findAll({
            include: ["tienda"],
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
/*
    productosPorTienda: function (req,res){

        db.Tienda.findByPk(req.params.codigo, {
            include: ["productos"]
        })
            .then (function(tienda){
            return res.render('prodPorTienda', {productos: tienda.productos, user: req.session.usuarioLogueado});
            })
            .catch(function(e){
                console.log(e)
            });
    },

    productosOrganicos: function(req,res){
        db.Categoria.findOne({
            include: [{association: "productos"}],
            where: {name:"filtroOrg"}
        })

        .then(function(categoria){
            res.render("prodPorTienda", {productos: categoria.productos, user: req.session.usuarioLogueado})
        })
        .catch(function(e){
            console.log(e)
        });

    },

    productosSinTacc: function(req,res){
        db.Categoria.findOne({
            include: [{association: "productos"}],
            where: {name:"filtroSinTacc"}
        })

        .then(function(categoria){
            res.render("prodPorTienda", {productos: categoria.productos, user: req.session.usuarioLogueado})
        })
        .catch(function(e){
            console.log(e)
        });
    },

    productosSinLactosa: function(req,res){
        db.Categoria.findOne({
            include: [{association: "productos"}],
            where: {name:"filtroSinLactosa"}
        })

        .then(function(categoria){
            res.render("prodPorTienda", {productos: categoria.productos, user: req.session.usuarioLogueado})
        })
        .catch(function(e){
            console.log(e)
        });
    },

    detalleProducto: function(req,res){
        db.Producto.findByPk(req.params.codigo)
        .then(function(producto){
            res.render('productDetail', {producto: producto, user: req.session.usuarioLogueado});
        })
        .catch(function(e){
            console.log(e)
        });
    },

    //Acá empieza la parte en donde sólo tiene acceso el adm.

        nuevoProducto: function (req,res){

            db.Tienda.findAll()
                .then (function(tiendas){
                    res.render('productAdd', {tiendas: tiendas});
                })
                .catch(function(e){
                    console.log(e)
                });
        },

        get_searchProductos: function (req,res){
            // con req.query.<dato> obtenemos el dato que viene del cliente en el cuerpo del form por GET

            db.Producto.findAll({
                include: ["tienda"],
            })
                .then(function(productos){
                    let nombreBuscado =  req.query.nombre;
                    let results = [];
                    productos.forEach((prod, i) => {
                        if (prod.name.toLowerCase().includes(nombreBuscado.toLowerCase().trim()) || prod.short_description.toLowerCase().includes(nombreBuscado.toLowerCase().trim())) {
                            results.push(prod);
                        }
                    })
                    return res.render('listadoProductos', {productos: results});
                })
                .catch(function(e){
                    console.log(e)
                });
        },


        listadoTiendas: function (req,res){
            db.Tienda.findAll()
                .then(function(tiendas){
                    res.render('listadoTiendas', {tiendas: tiendas});
                })
                .catch(function(e){
                    console.log(e)
                });
        },

        get_searchTiendas: function (req,res){
            db.Tienda.findAll()
                .then(function(tiendas){
                    let nombreBuscado =  req.query.nombre;
                    let results = [];
                    tiendas.forEach((tiend, i) => {
                        if (tiend.name.toLowerCase().includes(nombreBuscado.toLowerCase().trim()) || tiend.description.toLowerCase().includes(nombreBuscado.toLowerCase().trim())) {
                            results.push(tiend);
                        }
                    })
                    return res.render('listadoTiendas', {tiendas: results});
                })
                .catch(function(e){
                    console.log(e)
                });
        },

        get_editTienda: function(req,res){

            db.Tienda.findByPk(req.params.codigo)
                .then(function(tienda){
                    return res.render('tiendaEdit', {tienda: tienda});
                })
                .catch(function(e){
                    console.log(e)
                });
            },*/
    }

    module.exports = productsController;
