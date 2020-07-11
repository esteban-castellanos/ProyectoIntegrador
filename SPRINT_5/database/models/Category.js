const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

    let alias = "category";
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
    }

let config = {
    tableName: "categories",
    timestamps: false,
};

const Category = sequelize.define(alias, cols, config);

Category.associate = function(models){
    Category.belongsToMany(models.products, {
        as: "productos",
        through: "products_categories",
        foreignKey: "category_id",
        otherKey: "product_id",
        timestamps: false,
    });
}

return Category;

}