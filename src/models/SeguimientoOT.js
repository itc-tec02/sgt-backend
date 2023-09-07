const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    
    sequelize.define("xfoSeguimientoOT", {
        idxfoSeguimientoOT:{
            type: DataTypes.INTEGER(11),
            primaryKey: true,
        },
        codxfoOrdenTrabajo:{
            type: DataTypes.CHAR(10),
            unique: true,
        },
        TipoFlujo:{
            type: DataTypes.CHAR(1),
            allownull: true,
        },
        CodCROrigen:{
            type: DataTypes.CHAR(5),
            allownull: true,
        },
        CodUsrOrigen:{
            type: DataTypes.CHAR(10),
            allownull: true,
        },
        FecEnvio:{
            type: DataTypes.DATE,
            allownull: true,
        },
        CodCRDestino:{
            type: DataTypes.CHAR(5),
            allownull: true,
        },
        CodUsrDestino:{
            type: DataTypes.CHAR(10),
            allownull: true,
        },
        FecRecepcion:{
            type: DataTypes.DATE,
            allownull: true,
        },
        FecRechazo:{
            type: DataTypes.DATE,
            allownull: true,
        },
        Observaciones:{
            type: DataTypes.STRING(1000),
            allownull: true,
        },
        Secuencial:{
            type: DataTypes.SMALLINT(3),
            allownull: false,
        },
    }, { timestamp: false })
}