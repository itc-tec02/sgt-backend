const { Sequelize, DataTypes } = require("sequelize")
require("dotenv").config()
const {DB_USER, DB_PWD, DB_HOST, DB_NAME,} = process.env

const OrdenTrabajoModel = require("./models/OrdenTrabajo");
const SegCrModel = require("./models/SegCr");
const SeguimientoOTModel = require("./models/SeguimientoOT");
const TrafoModel = require("./models/Trafo");
const TrafoEnsayoModel = require("./models/TrafoEnsayo");
const TrafoFabricanteModel = require("./models/TrafoFabricante");
const TrafoMantenimientoModel = require("./models/TrafoMantenimiento");
const TrafoMarcaModel = require("./models/TrafoMarca");
const TrafoTipoIndustriaModel = require("./models/TrafoTipoIndustria");
const TrafoTipoModelo = require("./models/TrafoTipoModelo");
const UsuarioModel = require("./models/Users");
const UsuarioCrModel = require("./models/UsersCr");

const sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PWD}@${DB_HOST}/${DB_NAME}`, { loggging: false } ) // Example for mysql
// const sequelize = new Sequelize('mysql://itc:admin@localhost:3306/localServer') // Example for mysql
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

OrdenTrabajoModel(sequelize);
SegCrModel(sequelize);
SeguimientoOTModel(sequelize);
TrafoModel(sequelize);
TrafoEnsayoModel(sequelize);
TrafoFabricanteModel(sequelize);
TrafoMantenimientoModel(sequelize);
TrafoMarcaModel(sequelize);
TrafoTipoIndustriaModel(sequelize);
TrafoTipoModelo(sequelize);
UsuarioModel(sequelize);
UsuarioCrModel(sequelize);


module.exports = { sequelize , ...sequelize.models}

// Crear la conexion con la base de datos
// Definir los modelos
// Relacionarlos
// Exportarla