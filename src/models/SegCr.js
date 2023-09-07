const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {

    sequelize.define("SegCr", {
        CodCR: {
            type: DataTypes.STRING(4),
            primaryKey: true,
        },
        NombreCR: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        CodCRPadre: {
            type: DataTypes.STRING(3),
            allowNull: true,
        },
        abreviatura: {
            type: DataTypes.STRING(10),
            allowNull: true
        }
         
    },{ timestamps: false })


}