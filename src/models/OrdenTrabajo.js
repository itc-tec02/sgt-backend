const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("xfoOrdenTrabajo", {
        CodxfoOrdenTrabajo: {
            type: DataTypes.CHAR(10),
            primaryKey: true
        },
        DescOrdenTrabajo: {
            type: DataTypes.STRING(1000),
            allownull: true,
        },
        NroOC: {
            type: DataTypes.CHAR(10),
            allownull: true,
        },
        NroSolOper: {
            type: DataTypes.CHAR(10),
            allownull: true,
        },
        Estado: {
            type: DataTypes.BOOLEAN,
            allownull: true,
        },
        EtapaProceso: {
            type: DataTypes.CHAR(1),
            allownull: true,
        },
        CodUsrProp: {
            type: DataTypes.CHAR(10),
            allownull: true,
        },
        FecCreacionOT: {
            type: DataTypes.DATE,
            allownull: true,
        },
        CodUsuarioAct: {
            type: DataTypes.CHAR(10),
            allownull: true,
        },
        FecAct: {
            type: DataTypes.DATE,
            allownull: true,
        },
        idxfoSeguimintoOT: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        tipoOrden: {
            type: DataTypes.CHAR(1),
            allownull: true,
        },
        usr_sor: {
            type: DataTypes.CHAR(10),
            allownull: true,
        },
        CasoEspecial: {
            type: DataTypes.CHAR(1),
            allownull: true,
        },
        sa_aerea: {
            type: DataTypes.STRING(20),
            allownull: true,
        },
        sa_subterranea: {
            type: DataTypes.STRING(20), 
            allownull: true,
        },
        sa_prioridad: {
            type: DataTypes.CHAR(1), 
            allownull: true,
        },
        sa_mantenimiento: {
            type: DataTypes.CHAR(1), 
            allownull: true,
        },
        sa_vb1: {
            type: DataTypes.CHAR(10), 
            allownull: true,
        },
        sa_vb2: {
            type: DataTypes.CHAR(10), 
            allownull: true,
        },
        sa_vb3: {
            type: DataTypes.CHAR(10), 
            allownull: true,
        },
        sa_vb4: {
            type: DataTypes.CHAR(10), 
            allownull: true,
        },
        CodSolOper: {
            type: DataTypes.CHAR(10), 
            allownull: true,
        }
        
    },{ timestamp: false })
}