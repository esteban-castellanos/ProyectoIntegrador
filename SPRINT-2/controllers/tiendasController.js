const tiendasController = {

    productos: function (req,res){
        res.send('estos son los productos de la tienda' + ' ' + req.params.idtienda);
    },
    
    }
    
    module.exports = tiendasController