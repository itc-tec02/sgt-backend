const { xfopuesto, sequelize } = require("../db")


const createPuesto = async (newPuesto) => {
    return await xfopuesto.create(newPuesto);
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