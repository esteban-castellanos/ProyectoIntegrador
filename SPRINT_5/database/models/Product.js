const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

    let alias = "products";
    let cols = {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INT(11),
        },
        name: {
            allowNull: false,
            type: DataTypes.VARCHAR(45),
        },
        short_description: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        long_description: {
            type: DataTypes.TEXT,
        },
        image: {
            allowNull: false,
            type: DataTypes.VARCHAR(45),
        },
        price: {
            allowNull: false,
            type: DataTypes.INT(11),
        },

    }

let config = {
    tableName: "products",
    timestamps: false,
};

const Product = sequelize.define(alias, cols, config);

Product.associate = function(models){
    Product.belongsTo(models.stores, {
        as: 'tiendas',
        foreignKey: 'store_id'
    })

    Product.belongsToMany(models.category, {
        as: "categorias",
        through: "products_categories",
        foreignKey: "product_id",
        otherKey: "category_id",
        timestamps: false,
    }),

    Product.belongsToMany(models.users, {
        as: "usuarios",
        through: "users_products",
        foreignKey: "product_id",
        otherKey: "user_id",
        timestamps: false,
    });
}

return Product;

}