const { xfotransformador, sequelize } = require("../db")
const { Op } = require("sequelize");


const getAllTrafos = async () => {
    return await sequelize.query(`CALL sp_get_trafos()`)
    // return await xfotransformador.findAll();
    // return await xfoTransformador.findAll({ limit: 20, order: [['idxfoTransformador','DESC']] });
}

const searchTrafoByIndustria = async (industria) => {
    return await xfotransformador.findAll({ where: { industria: { [Op.like]: `${industria}%` } } })
}

const getTrafobyId = async (TrafoId) => {
    return await xfotransformador.findByPk(TrafoId)
}

const createTrafo = async (trafoBody) => {
    // return await xfoTransformador_prueba.create({ TipoXfo, NroCIA, Fabricante })
    console.log(trafoBody);
    return await xfotransformador.create(trafoBody)
}

const updateTrafo = async (objTrafo, id) => {
    return await xfotransformador.update(objTrafo, { where: { idxfoTransformador: id} })
}

const deleteTrafo = async( id ) => {
    return await xfotransformador.destroy( { where: { idxfoTransformador : id } })
}

module.exports = { createTrafo, getAllTrafos, getTrafobyId, searchTrafoByIndustria, updateTrafo, deleteTrafo }