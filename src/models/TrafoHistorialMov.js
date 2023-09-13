const { DataTypes } = require("sequelize")


module.exports = (sequelize) => {
    
    sequelize.define("xfo_HistorialMov", {
        idxfoHistorialMov: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        idxfoTransformador: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        CodCRUbic: {
            type: DataTypes.CHAR(5),
            allowNull: true,
        },
        CodUsrUbic: {
            type: DataTypes.CHAR(10),
            allowNull: true,
        },
        idxfoPuesto: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        NroTrafo: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        FechaMovimiento: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        TipoActividad: {
            type: DataTypes.CHAR(1),
            allowNull: true,
        },
        CodEstado: {
            type: DataTypes.CHAR(2),
            allowNull: true,
        },
        NroSolOper: {
            type: DataTypes.CHAR(10),
            allowNull: true,
        },
        secuencial: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Kva: {
            type: DataTypes.DECIMAL(7,2),
            allowNull: true,
        },
    }, { timestamps: false, freezeTableName: true })
}