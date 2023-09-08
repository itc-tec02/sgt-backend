const { xfoTransformador } = require("../db")

const createTrafo = async (trafoBody) => {
    // return await xfoTransformador_prueba.create({ TipoXfo, NroCIA, Fabricante })
    return await xfoTransformador.create(trafoBody)
}

module.exports = { createTrafo }