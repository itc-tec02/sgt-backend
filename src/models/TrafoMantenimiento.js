const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("xfoMantenimiento", {
        idxfoMantenimiento: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
        },
        idxfoTransformador: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        FecMantenimiento: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        ResponsableMant: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        DescripcionMant: {
            type: DataTypes.STRING(500),
            allowNull: true,
        },
        ObservacionMant: {
            type: DataTypes.STRING(500),
            allowNull: true,
        },
        CodCR: {
            type: DataTypes.CHAR(4),
            allowNull: true,
        },

    }, { timestamps: false, freezeTableName: true })
}