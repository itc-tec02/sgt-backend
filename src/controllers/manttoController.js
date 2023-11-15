const { sequelize } = require("../db")

const getPotNominal = async () => {
    return await sequelize.query('SELECT * FROM desarrollo.xfopotnominal;')
}

const createPotNominal = async( {codigo, descripcion, valor})  => {    
    return await sequelize.query(`CALL sp_insert_PotNominal ('${codigo}', '${descripcion}', ${valor})`)
}


module.exports = {
    getPotNominal,
    createPotNominal,
}