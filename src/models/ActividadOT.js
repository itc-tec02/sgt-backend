const { DataTypes, Sequelize } = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define("xfo_ActividadOT", {
        idxfoActividadOT: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        codxfoOrdenTrabajo: {
            type: DataTypes.CHAR(10),
        },
        TipoActividad: {
            type: DataTypes.CHAR(1),
        },
        NroCia: {
            type: DataTypes.CHAR(6),
        },
        kvaSolicitado: {
            type: DataTypes.DECIMAL(6,2)
        },
        kvaEntregado: {
            type: DataTypes.DECIMAL(6,2)
        },
        codPuestoOrigen: {
            type: DataTypes.CHAR(10)
        },
        codPuestoDestino: {
            type: DataTypes.CHAR(10)
        },
        codUsuarioAct: {
            type: DataTypes.CHAR(10)
        },
        FecAct: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        FecProg: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        FecReal: {
            type: DataTypes.DATE,
        },
        EstadoFLujo: {
            type: DataTypes.CHAR(1),
        },
        codUserFLujo: {
            type: DataTypes.CHAR(10)
        },
        TipoXfoSol: {
            type: DataTypes.CHAR(1)
        }
    },{ timestamps: false, freezeTableName: true })
}