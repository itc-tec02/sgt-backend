const { Sequelize, DataTypes } = require("sequelize")
require("dotenv").config()

const {DB_USER, DB_PWD, DB_HOST, DB_NAME,} = process.env

const sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PWD}@${DB_HOST}/${DB_NAME}`) // Example for mysql
// const sequelize = new Sequelize('mysql://itc:admin@localhost:3306/localServer') // Example for mysql
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres


sequelize.define("Usuario", {
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    
    
},{ timestamps: false })

module.exports = { sequelize }

// Crear la conexion con la base de datos
// Definir los modelos
// Relacionarlos
// Exportarla