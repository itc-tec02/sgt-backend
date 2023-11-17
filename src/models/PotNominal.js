const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("xfopotnominal", {
        Codigo: {
            type: DataTypes.CHAR(10),
            primaryKey: true
        },
        Descripcion: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        Valor: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        }
    },{ timestamps: false, freezeTableName: true })
}