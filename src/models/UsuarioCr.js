const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("UsuarioCr", {
        CodCR: {
            type: DataTypes.STRING(4),
            primaryKey: true,
        },
        CodUsuario: {
            type: DataTypes.STRING(10),
            primaryKey: true,
        }
    },{ timestamps: false })
}