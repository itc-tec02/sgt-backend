const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("xfopuesto", {
        idxfoPuesto: {
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
        },
        Fase: {
            type: DataTypes.CHAR(4),
            allowNull: true,
        },
        FecPueServ: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        FecRetiro: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        Montaje: {
            type: DataTypes.CHAR(3),
            allowNull: true,
        },
        NroFases: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        NroEstructura: {
            type: DataTypes.CHAR(12),
            allowNull: true,
        },
        Observaciones: {
            type: DataTypes.STRING(500),
            allowNull: true,
        },
        PosicionFase: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        Propiedad: {
            type: DataTypes.CHAR(3),
            allowNull: true,
        },
        TipoConexion: {
            type: DataTypes.CHAR(3),
            allowNull: true,
        },
        TipoServicio: {
            type: DataTypes.CHAR(3),
            allowNull: true,
        },
        Direccion: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        ZonaMunicipal: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        CodAlimentador: {
            type: DataTypes.CHAR(10), 
            allowNull: true,
        },
        Ciudad: {
            type: DataTypes.STRING(100),
            allowNull: true,
        }
    },{ timestamps: false, freezeTableName: true })
}