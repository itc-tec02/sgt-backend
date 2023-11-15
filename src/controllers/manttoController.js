const { sequelize } = require("../db")


//* GET Mantenimiento Controllers

const getPotNominal = async () => {
    return await sequelize.query('SELECT * FROM desarrollo.xfopotnominal;')
}

const getAdm = async () => {
    return await sequelize.query('SELECT * FROM segcr WHERE CodCRPadre="ADM";')
}

const getAlmacen = async () => {
    return await sequelize.query(`SELECT * FROM segcr WHERE CodCRPadre= 'ALM' `)
}

const getOpInfo = async() => {
    return await sequelize.query(`SELECT * FROM segcr WHERE CodCRPadre= 'COI' `)
}

const getContrat = async() => {
    return await sequelize.query(`SELECT * FROM segcr WHERE CodCRPadre= 'CPT' `)
}

const getOpMant = async() => {
    return await sequelize.query(`SELECT * FROM segcr WHERE CodCRPadre= 'OMR' `)
}

//* POST Mantenimiento Controllers

const createPotNominal = async( {codigo, descripcion, valor})  => {    
    return await sequelize.query(`CALL sp_insert_PotNominal ('${codigo}', '${descripcion}', ${valor})`)
}


module.exports = {
    createPotNominal,
    getAdm,
    getAlmacen,
    getContrat,
    getOpInfo,
    getOpMant,
    getPotNominal,
}