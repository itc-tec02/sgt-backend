const { DataTypes } = require("sequelize")

module.exports = (sequelize)=> {

    sequelize.define("xfoensayo", {
        idxfoEnsayo: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
        },
        FecEnsayo: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        idxfoTransformador: {
            type: DataTypes.INTEGER(11),
            unique: true,
            allowNull: true,
        },
        Apto: {
            type: DataTypes.CHAR(1),
            allowNull: true,
        },
        raATM15: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        raATM30: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        raATM45: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        raATM60: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        raATMiab: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        raBTM15: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        raBTM30: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        raBTM45: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        raBTM60: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        raBTMiab: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        raATBT15: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        raATBT30: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        raATBT45: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        raATBT60: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        raATBTiab: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        rdPrueba1: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        rdPrueba2: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        rdPrueba3: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        rdPrueba4: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        rdPrueba5: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        rdPromedioX: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: true,
        },
        rdDesvStd: {
            type: DataTypes.FLOAT(),
            allowNull: true,
        },
        paColor: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        paNroNeutralizacion: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        Observaciones: {
            type: DataTypes.STRING(1000),
            allowNull: true,
        },
        codCR: {
            type: DataTypes.CHAR(4),
            allowNull: true,
        },
        tipoNucleo: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        idTecnico: {
            type: DataTypes.CHAR(10),
            allowNull: true,
        },
    }, { timestamps: false, freezeTableName: true })
}