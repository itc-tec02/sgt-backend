const { DataTypes } = require("sequelize")

module.exports = (sequelize)=> {
    sequelize.define("xfoTransformador",{
        idxfoTransformador: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        TipoXfo: {
            type: DataTypes.CHAR(1),
            allowNull: true,
        },
        NroCIA: {
            type: DataTypes.CHAR(6),
            allowNull: true,
            unique: true,
        },
        Fabricante: {
            type: DataTypes.CHAR(25),
            allowNull: true,
        },
        Industria: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        NroSerie: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        AnnioFab: {
            type: DataTypes.INTEGER(4),
            allowNull: true,
        },
        peso: {
            type: DataTypes.DECIMAL(7,2),
            allowNull: true,
        },
        Longitud: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: true,
        },
        Ancho: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: true,
        },
        Alto: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: true,
        },
        PotNominal: {
            type: DataTypes.DECIMAL(7,2),
            allowNull: true,
        },
        TenNomPrimario: {
            type: DataTypes.CHAR(10),
            allowNull: true,
        },
        TenNomSecundario: {
            type: DataTypes.CHAR(10),
            allowNull: true,
        },
        TipoConexion: {
            type: DataTypes.STRING(15),
            allowNull: true,
        },
        Frecuencia: {
            type: DataTypes.STRING(5),
            allowNull: true,
        },
        Impedancia: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: true,
        },
        IndAceiteAislante: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        TipoRefrigeracion: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        VolumenAceite: {
            type: DataTypes.DECIMAL(6,2),
            allowNull: true,
        },
        Polaridad: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        SimboloEnY: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        SimboloEnD: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        PosConmutacion: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        CnxEnPrimario: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        NivAislamientoAT: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        NivAislamientoBT: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        NivImpulsoAT: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        NivImpulsoBT: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        MatBobinadosAT: {
            type: DataTypes.CHAR(2),
            allowNull: true,
        },
        MatBobinadosBT: {
            type: DataTypes.CHAR(2),
            allowNull: true,
        },
        Marca: {
            type: DataTypes.STRING(25),
            allowNull: true,
        },
        Modelo: {
            type: DataTypes.STRING(5),
            allowNull: true,
        },
        Observaciones: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        EstadoTrafo: {
            type: DataTypes.CHAR(2),
            allowNull: true,
        },
        EstadoInstalacion: {
            type: DataTypes.CHAR(4),
            allowNull: true,
        },
        CodCR: {
            type: DataTypes.CHAR(4),
            allowNull: true,
        },
        idxfoPuesto: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        NroTrafo: {
            type: DataTypes.SMALLINT(1),
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
        Propiedad: {
            type: DataTypes.CHAR(3),
            allowNull: true,
        },
        idxfoHistorialMov: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        posicionFase: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        CorrienteNomPrimario: {
            type: DataTypes.DECIMAL(6,2),
            allowNull: true,
        },
        CorrienteNomSecundario: {
            type: DataTypes.DECIMAL(6,2),
            allowNull: true,
        },
        CnxSecundario: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        PtosEnPrimario: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        PtosEnSecundario: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
    }, { timestamps: false, freezeTableName: true })
}