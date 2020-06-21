const fs =require('fs');

const productosController = {

    /*detalle: function (req,res){
        res.render('productDetail');
    },*/

    productosPorTienda: function (req,res){

        let archivoTiendas=fs.readFileSync('data_tiendas.json', {encoding: 'utf-8'});
        let tiendas;
        if(archivoTiendas == ""){
            tiendas =[];
            } else {
            tiendas = JSON.parse(archivoTiendas);
        }

        tiendas.forEach((tiend, i) => {
            if (tiend.codigo == req.params.codigo) {
                tienda = tiend;
            }
        });

        let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
        let productos;
        if(archivoProductos == ""){
            productos =[];
            } else {
            productos = JSON.parse(archivoProductos);
        }

        let productosTienda = [];
        productos.forEach((prod, i) => {
            if (prod.tienda == tienda.nombreTienda){
                productosTienda.push(prod);
                }
        });
        res.render('prodPorTienda', {productos: productosTienda});
    },

    productosOrganicos: function(req,res){
        let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
        let productos;
        if(archivoProductos == ""){
            productos =[];
            } else {
            productos = JSON.parse(archivoProductos);
        }

        let productosOrganicos = [];
        productos.forEach((prod, i) => {
            if (prod.filtroOrg == "on"){
                productosOrganicos.push(prod);
                }
        });
        console.log(productosOrganicos);
        res.render("prodPorTienda", {productos: productosOrganicos})

    },

    productosSinTacc: function(req,res){
        let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
        let productos;
        if(archivoProductos == ""){
            productos =[];
            } else {
            productos = JSON.parse(archivoProductos);
        }
        let productosSinTacc = [];
        productos.forEach((prod, i) => {
            if (prod.filtroSinTacc == "on"){
                productosSinTacc.push(prod);
                }
        });
        res.render("prodPorTienda", {productos: productosSinTacc})
    },

    productosSinLactosa: function(req,res){
        let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
        let productos;
        if(archivoProductos == ""){
            productos =[];
            } else {
            productos = JSON.parse(archivoProductos);
        }
        let productosSinLactosa = [];
        productos.forEach((prod, i) => {
            if (prod.filtrosSinLactosa == "on"){
                productosSinLactosa.push(prod);
                }
        });
        res.render("prodPorTienda", {productos: productosSinLactosa})
    },

    detalleProducto: function(req,res){
        let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
        let productos;
        if(archivoProductos == ""){
            productos =[];
            } else {
            productos = JSON.parse(archivoProductos);
        }

        let productoSeleccionado
        productos.forEach((prod, i) => {
            if (prod.codigo == req.params.codigo){
                productoSeleccionado = prod
                }
        })

        res.render('productDetail', {producto: productoSeleccionado});
    },

        nuevoProducto: function (req,res){
            res.render('productAdd');
        },
        crearProducto: function(req, res, next){

            let producto = {
                codigo: req.body.codigo,
                nombreProducto: req.body.nombreProduct,
                descCorta: req.body.descCorta,
                descLarga: req.body.descLarga,
                precio: req.body.precio,
                tienda: req.body.tienda,
                filtroOrg: req.body.org,
                filtroSinTacc: req.body.sinTacc,
                filtrosSinLactosa: req.body.sinLactosa,
                fotoProducto: req.files[0].filename
            }
            //GUARDAR INFORMACION DEL FORMULARIO EN UN ARCHIVO

            //1ºLeer el archivo
            let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
            let productos;
            if(archivoProductos == ""){
                productos =[];
            } else {
                productos = JSON.parse(archivoProductos);
            }

            //agregamos el usuarios Nuevo
            productos.push(producto);
            //Escribir el archivo
            productosJSON = JSON.stringify(productos);

            fs.writeFileSync('data_productos.json', productosJSON);

            res.redirect('/productos');
        },

        listadoProductos: function (req,res){
            let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
            let productos;
            if(archivoProductos == ""){
                productos =[];
            } else {
                productos = JSON.parse(archivoProductos);
            }
            res.render('listadoProductos', {productos: productos});
        },

        get_searchProductos: function (req,res){
            // con req.query.<dato> obtenemos el dato que viene del cliente en el cuerpo del form por GET
            let nombreBuscado =  req.query.nombre;
            let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
            let productos;
            if(archivoProductos == ""){
                productos =[];
            } else {
                productos = JSON.parse(archivoProductos);
            }

            let results = [];
            productos.forEach((prod, i) => {
                if (prod.nombreProducto.includes(nombreBuscado)) {
                    results.push(prod);
                }
                console.log(results);
            });
            return res.render('productoBuscado', {productos: results});
        },

        deleteProduct: function(req,res){
            let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
            let productos;
            if(archivoProductos == ""){
                productos =[];
            } else {
                productos = JSON.parse(archivoProductos);
            }

            let producto = null;
            productos.forEach((prod, i) => {
                if (prod["codigo"] == req.params.codigo) {
                    producto = prod;
                }
            });

            let nuevoArrayProductos = [];
            nuevoArrayProductos = productos.filter(prod => prod.codigo != producto.codigo);
            nuevoArrayProductosJSON = JSON.stringify(nuevoArrayProductos);
            fs.writeFileSync('data_productos.json', nuevoArrayProductosJSON);
            return res.render("listadoProductos",{productos: nuevoArrayProductos});
        },

        get_editProducto: function(req,res){
            let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
            let productos;
            if(archivoProductos == ""){
                productos =[];
            } else {
                productos = JSON.parse(archivoProductos);
            }

            let producto = null;
            productos.forEach((prod, i) => {
                if (prod["codigo"] == req.params.codigo) {
                    producto = prod;
                }
            });
            return res.render('productEdit',{producto: producto});
        },

        put_editProducto: function (req,res){
            let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
            let productos;
            if(archivoProductos == ""){
                productos =[];
            } else {
                productos = JSON.parse(archivoProductos);
            }

            //console.log (req.body.descCorta);

                productos.map((prod) => { // Modificamos el array de productos
                     if (prod.codigo == req.body.codigo) {
                            prod.codigo = req.body.codigo,
                            prod.nombreProducto = req.body.nombreProduct,
                            prod.descCorta = req.body.descCorta,
                            prod.descLarga = req.body.descLarga,
                            prod.precio = req.body.precio,
                            prod.tienda = req.body.tienda,
                            prod.filtroOrg = req.body.org,
                            prod.filtroSinTacc = req.body.sinTacc,
                            prod.filtrosSinLactosa = req.body.sinLactosa,
                            prod.fotoProducto = req.files[0].filename
                     }
                  });

                  productosJSON = JSON.stringify(productos);
                  fs.writeFileSync('data_productos.json', productosJSON);

                  res.redirect("/productos");
               },

        listadoTiendas: function (req,res){
                let archivoTiendas=fs.readFileSync('data_tiendas.json', {encoding: 'utf-8'});
                let tiendas;
                if(archivoTiendas == ""){
                    tiendas =[];
                } else {
                    tiendas = JSON.parse(archivoTiendas);
                }
                    res.render('listadoTiendas', {tiendas: tiendas});
            },

        get_searchTiendas: function (req,res){
                let nombreBuscado =  req.query.nombre;

                let archivoTiendas=fs.readFileSync('data_tiendas.json', {encoding: 'utf-8'});
                let tiendas;
                if(archivoTiendas == ""){
                    tiendas =[];
                } else {
                    tiendas = JSON.parse(archivoTiendas);
                }
                let results = [];
                tiendas.forEach((tiend, i) => {
                    if (tiend.nombreTienda.includes(nombreBuscado)) {
                        results.push(tiend);
                    }
                });
                return res.render('tiendaBuscada', {tiendas: results});
            },

        nuevaTienda: function (req,res){
                res.render('tiendaAdd');
            },

        crearTienda: function(req, res){
                console.log(req.files);

                let tienda = {
                    codigo: req.body.codigo,
                    nombreTienda: req.body.nombreTienda,
                    descLarga: req.body.descLarga,
                    fotoTienda: req.files[0].filename
                }

                //GUARDAR INFORMACION DEL FORMULARIO EN UN ARCHIVO

                //1ºLeer el archivo
                let archivoTiendas=fs.readFileSync('data_tiendas.json', {encoding: 'utf-8'});
                let tiendas;
                if(archivoTiendas == ""){
                    tiendas =[];
                } else {
                    tiendas = JSON.parse(archivoTiendas);
                }

                //agregamos la nueva tienda
                tiendas.push(tienda);
                //Escribir el archivo
                tiendasJSON = JSON.stringify(tiendas);

                fs.writeFileSync('data_tiendas.json', tiendasJSON);

                res.redirect('/productos/tiendas');
            },

        get_editTienda: function(req,res){
                let archivoTiendas=fs.readFileSync('data_tiendas.json', {encoding: 'utf-8'});
                let tiendas;
                if(archivoTiendas == ""){
                    tiendas =[];
                } else {
                    tiendas = JSON.parse(archivoTiendas);
                }

                let tienda = null;
                tiendas.forEach((tiend, i) => {
                    if (tiend["codigo"] == req.params.codigo) {
                        tienda = tiend;
                    }
                });

                return res.render('tiendaEdit', {tienda: tienda});
            },

        put_editTienda: function (req,res){

                let archivoTiendas=fs.readFileSync('data_tiendas.json', {encoding: 'utf-8'});
                let tiendas;
                if(archivoTiendas == ""){
                    tiendas =[];
                } else {
                    tiendas = JSON.parse(archivoTiendas);
                }

                tiendas.map((tiend) => { // Modificamos el array de tiendas
                         if (tiend.codigo == req.body.codigo) {
                                tiend.codigo = req.body.codigo,
                                tiend.nombreTienda = req.body.nombreTienda,
                                tiend.descLarga = req.body.descLarga,
                                tiend.fotoTienda = req.files[0].filename
                         }
                      });

                      tiendasJSON = JSON.stringify(tiendas);
                      fs.writeFileSync('data_tiendas.json', tiendasJSON);

                      res.redirect("/productos/tiendas");
                   },

        deleteTienda: function(req,res){
                let archivoTiendas=fs.readFileSync('data_tiendas.json', {encoding: 'utf-8'});
                let tiendas;
                if(archivoTiendas == ""){
                    tiendas =[];
                } else {
                    tiendas = JSON.parse(archivoTiendas);
                }
                let tienda = null;
                tiendas.forEach((tiend, i) => {
                    if (tiend["codigo"] == req.params.codigo) {
                        tienda = tiend;
                    }
                });
                console.log(tienda);
                let nuevoArrayTiendas = [];
                nuevoArrayTiendas = tiendas.filter(tiend => tiend.codigo != tienda.codigo);
                nuevoArrayTiendasJSON = JSON.stringify(nuevoArrayTiendas);
                fs.writeFileSync('data_tiendas.json', nuevoArrayTiendasJSON);
                return res.render("listadoTiendas",{tiendas: nuevoArrayTiendas});
            },

    }

    module.exports = productosController;
