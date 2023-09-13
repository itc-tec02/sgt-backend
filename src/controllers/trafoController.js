const { xfoTransformador } = require("../db")
const { Op } = require("sequelize");


const getAllTrafos = async () => {
    return await xfoTransformador.findAll({ limit: 100, order: [['idxfoTransformador','DESC']] });
}

const searchTrafoByIndustria = async (industria) => {
    return await xfoTransformador.findAll({ where: { industria: { [Op.like]: `${industria}%` } } })
}

const getTrafobyId = async (TrafoId) => {
    return await xfoTransformador.findByPk(TrafoId)
}

const createTrafo = async (trafoBody) => {
    // return await xfoTransformador_prueba.create({ TipoXfo, NroCIA, Fabricante })
    return await xfoTransformador.create(trafoBody)
}

module.exports = { createTrafo, getAllTrafos, getTrafobyId, searchTrafoByIndustria }