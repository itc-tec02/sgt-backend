const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("xfoOrdenTrabajo", {
        CodxfoOrdenTrabajo: {
            type: DataTypes.CHAR(10),
            primaryKey: true
        },
        DescOrdenTrabajo: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        NroOC: {
            type: DataTypes.CHAR(10),
            allowNull: true,
        },
        NroSolOper: {
            type: DataTypes.CHAR(10),
            allowNull: true,
        },
        Estado: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        EtapaProceso: {
            type: DataTypes.CHAR(1),
            allowNull: true,
        },
        CodUsrProp: {
            type: DataTypes.CHAR(10),
            allowNull: true,
        },
        FecCreacionOT: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        CodUsuarioAct: {
            type: DataTypes.CHAR(10),
            allowNull: true,
        },
        FecAct: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        idxfoSeguimintoOT: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        tipoOrden: {
            type: DataTypes.CHAR(1),
            allowNull: true,
        },
        usr_sor: {
            type: DataTypes.CHAR(10),
            allowNull: true,
        },
        CasoEspecial: {
            type: DataTypes.CHAR(1),
            allowNull: true,
        },
        sa_aerea: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        sa_subterranea: {
            type: DataTypes.STRING(20), 
            allowNull: true,
        },
        sa_prioridad: {
            type: DataTypes.CHAR(1), 
            allowNull: true,
        },
        sa_mantenimiento: {
            type: DataTypes.CHAR(1), 
            allowNull: true,
        },
        sa_vb1: {
            type: DataTypes.CHAR(10), 
            allowNull: true,
        },
        sa_vb2: {
            type: DataTypes.CHAR(10), 
            allowNull: true,
        },
        sa_vb3: {
            type: DataTypes.CHAR(10), 
            allowNull: true,
        },
        sa_vb4: {
            type: DataTypes.CHAR(10), 
            allowNull: true,
        },
        CodSolOper: {
            type: DataTypes.CHAR(10), 
            allowNull: true,
        }
        
    },{ timestamps: false, freezeTableName: true })
}