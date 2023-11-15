const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("xfopotnominal", {
        Codigo: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        CodPuesto: {
            type: DataTypes.CHAR(8),
            allowNull: true,
        },
        EstadoInstalacion: {
            type: DataTypes.CHAR(4),
            allowNull: true,
        }
    },{ timestamps: false, freezeTableName: true })
}