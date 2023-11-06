const { DataTypes } = require("sequelize");

module.exports= (sequelize) => {

    sequelize.define("xfo_propietario", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Descripcion: {
            type: DataTypes.STRING(60),
            unique: true,
            allowNull: false,
        },
        Estado: {
            type: DataTypes.CHAR(1),
            allowNull: false,
        }
    }, { timestamps: false, freezeTableName: true })
}