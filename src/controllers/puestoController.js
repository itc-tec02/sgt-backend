const { xfopuesto, sequelize } = require("../db")


const createPuesto = async (newPuesto) => {
    return await xfopuesto.create(newPuesto);
}

const getAllPuestos = async () => {
    return await sequelize.query(`CALL sp_get_puestos()`)
    // return await xfopuesto.findAll()
}

const getPuestoById = async (idPuesto) => {
    return await xfopuesto.findByPk(idPuesto)
}

const updatePuesto = async(objPuesto, id) => {
    return await xfopuesto.update(objPuesto, { where: { idxfoPuesto: id} })
}

module.exports = { 
    createPuesto,
    getAllPuestos,
    getPuestoById,
    updatePuesto,
}