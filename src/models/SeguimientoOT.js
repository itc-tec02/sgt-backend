const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    
    sequelize.define("xfoseguimientoot", {
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
            allowNull: true,
        },
        CodCROrigen:{
            type: DataTypes.CHAR(5),
            allowNull: true,
        },
        CodUsrOrigen:{
            type: DataTypes.CHAR(10),
            allowNull: true,
        },
        FecEnvio:{
            type: DataTypes.DATE,
            allowNull: true,
        },
        CodCRDestino:{
            type: DataTypes.CHAR(5),
            allowNull: true,
        },
        CodUsrDestino:{
            type: DataTypes.CHAR(10),
            allowNull: true,
        },
        FecRecepcion:{
            type: DataTypes.DATE,
            allowNull: true,
        },
        FecRechazo:{
            type: DataTypes.DATE,
            allowNull: true,
        },
        Observaciones:{
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        Secuencial:{
            type: DataTypes.SMALLINT(3),
            allowNull: false,
        },
    }, { timestamps: false, freezeTableName: true })
}