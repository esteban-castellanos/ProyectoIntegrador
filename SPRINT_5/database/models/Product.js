const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

    let alias = "product";
    let cols = {

id: {
autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
},
name: {
    allowNull: false,
    type: DataTypes.STRING,
},
short_description: {
    allowNull: false,
    type: DataTypes.STRING,
},
long_description: {


},
image: {

},
price: {

},

}

let config = {
    tableName: "product",
    timestamps: false,
};

const Product = sequelize.define(alias, cols, config);

return Product;

}