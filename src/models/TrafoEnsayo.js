const { DataTypes } = require("sequelize")

module.exports = (sequelize)=> {

    sequelize.define("xfoEnsayo", {
        idxfoEnsayo: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
        },
        FecEnsayo: {
            type: DataTypes.DATE,
            allownull: true,
        },
        idxfoTransformador: {
            type: DataTypes.INTEGER(11),
            unique: true,
            allownull: true,
        },
        Apto: {
            type: DataTypes.CHAR(1),
            allownull: true,
        },
        raATM15: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        raATM30: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        raATM45: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        raATM60: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        raATMiab: {
            type: DataTypes.FLOAT,
            allownull: true,
        },
        raBTM15: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        raBTM30: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        raBTM45: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        raBTM60: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        raBTMiab: {
            type: DataTypes.FLOAT,
            allownull: true,
        },
        raATBT15: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        raATBT30: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        raATBT45: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        raATBT60: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        raATBTiab: {
            type: DataTypes.FLOAT,
            allownull: true,
        },
        rdPrueba1: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        rdPrueba2: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        rdPrueba3: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        rdPrueba4: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        rdPrueba5: {
            type: DataTypes.INTEGER(11),
            allownull: true,
        },
        rdPromedioX: {
            type: DataTypes.DECIMAL(5,2),
            allownull: true,
        },
        rdDesvStd: {
            type: DataTypes.FLOAT(),
            allownull: true,
        },
        paColor: {
            type: DataTypes.STRING(100),
            allownull: true,
        },
        paNroNeutralizacion: {
            type: DataTypes.STRING(100),
            allownull: true,
        },
        Observaciones: {
            type: DataTypes.STRING(1000),
            allownull: true,
        },
        codCR: {
            type: DataTypes.CHAR(4),
            allownull: true,
        },
        tipoNucleo: {
            type: DataTypes.STRING(50),
            allownull: true,
        },
        idTecnico: {
            type: DataTypes.CHAR(10),
            allownull: true,
        },
    })
}