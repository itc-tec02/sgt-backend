const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("Usuario", {
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
            allowNull: false,
        },
        Estado:{
            type: DataTypes.BOOLEAN,
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
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        cargo: {
            type: DataTypes.STRING,
            allowNull: true,
        }    
        
    },{ timestamps: false })
}