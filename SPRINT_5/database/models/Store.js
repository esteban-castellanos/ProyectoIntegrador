const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

    let alias = "stores";
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
description: {
    type: DataTypes.TEXT,
},

image: {
    type: DataTypes.VARCHAR(45),
},

}

let config = {
    tableName: "stores",
    timestamps: false,
};

const Store = sequelize.define(alias, cols, config);

Store.associate = function(models){
    Store.hasMany(models.products, {
    as: 'productos',
    foreignKey: 'store_id'
    })
}

return Store;

}