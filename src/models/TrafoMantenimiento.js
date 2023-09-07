const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("xfoMantenimiento", {
        idxfoMantenimiento: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
        },
        idxfoTransformador: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        FecMantenimiento: {
            type: DataTypes.DATE,
            allownull: true,
        },
        ResponsableMant: {
            type: DataTypes.STRING(100),
            allownull: true,
        },
        DescripcionMant: {
            type: DataTypes.STRING(500),
            allownull: true,
        },
        ObservacionMant: {
            type: DataTypes.STRING(500),
            allownull: true,
        },
        CodCR: {
            type: DataTypes.CHAR(4),
            allownull: true,
        },

    }, { timestamps: false })
}