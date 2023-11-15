const { sequelize } = require("../db")


//* GET Mantenimiento Controllers

const getPotNominal = async () => {
    return await sequelize.query('SELECT * FROM desarrollo.xfopotnominal;')
}

const getAdm = async () => {
    return await sequelize.query(`SELECT * FROM segcr WHERE CodCRPadre= 'AMD' `)
}

const getAlmacen = async () => {
    return await sequelize.query(`SELECT * FROM segcr WHERE CodCRPadre= 'ALM' `)
}


//* POST Mantenimiento Controllers

const createPotNominal = async( {codigo, descripcion, valor})  => {    
    return await sequelize.query(`CALL sp_insert_PotNominal ('${codigo}', '${descripcion}', ${valor})`)
}


module.exports = {
    getPotNominal,
    createPotNominal,
    getAdm,
    getAlmacen,
    getOpInfo,
    getContrat,
    getOpMant,
}