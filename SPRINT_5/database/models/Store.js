const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

    let alias = "store";
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
description: {
    allowNull: false,
    type: DataTypes.STRING,
},

image: {

},

}

let config = {
    tableName: "store",
    timestamps: false,
};

const Store = sequelize.define(alias, cols, config);

return Store;

}