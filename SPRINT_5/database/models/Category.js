const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

    let alias = "category";
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
}

let config = {
    tableName: "category",
    timestamps: false,
};

const Category = sequelize.define(alias, cols, config);

return Category;

}