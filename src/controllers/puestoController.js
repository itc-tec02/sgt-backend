const { xfopuesto, sequelize } = require("../db")

const createPuesto = async (userId) => {
    
}

const getAllPuestos = async () => {
    return await sequelize.query(`CALL sp_get_puestos()`)
}

const getPuestobyId = async (userId) => {
    
}

module.exports = { 
    createPuesto,
    getAllPuestos,
    getPuestobyId,
}