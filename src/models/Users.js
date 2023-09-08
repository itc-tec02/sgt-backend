const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("segUsuario", {
        CodUsuario:{
            type: DataTypes.STRING(10),
            primaryKey: true,
        },
        Nombres:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        Apellidos:{
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        Password:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        Estado:{
            type: DataTypes.CHAR(1),
            allowNull: false,
        },
        NombreAbrev:{
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        CodUsuarioSOR: {
            type: DataTypes.STRING(10),
            unique: true,
        },
        flagSAOC: {
            type: DataTypes.CHAR(1),
            allowNull: true,
        },
        cargo: {
            type: DataTypes.STRING,
            allowNull: true,
        }    
        
    },{ timestamps: false, freezeTableName: true })
}