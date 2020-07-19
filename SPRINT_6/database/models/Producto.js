module.exports = function (sequelize, dataTypes){

    let alias = "Producto";

    let cols = {
        code: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        short_description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        long_description: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        store_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "products",
        timestamps: false
    }

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models){
        Producto.belongsTo(models.Tienda, {
            as: 'tienda',
            foreignKey: 'store_id'
        })

        Producto.belongsToMany(models.Categoria, {
            as: "categorias",
            through: "products_categories",
            foreignKey: "product_id",
            otherKey: "category_id",
            timestamps: false,
        }),

        Producto.belongsToMany(models.Usuario, {
            as: "usuarios",
            through: "users_products",
            foreignKey: "product_id",
            otherKey: "user_id",
            timestamps: false,
        });
    }

    return Producto;
}