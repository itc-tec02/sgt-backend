const { sequelize, xfopotnominal  } = require("../db")


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

const getGrupo = async (grupo) => {
    return await sequelize.query(`SELECT * FROM gentablacodigo WHERE codgenTablaTipo= '${grupo}' `)
}

//* PUT Mantenimiento Controllers
const updatePotNominal = async( potObj ) => {
    return await xfopotnominal.update( potObj, { where: { Codigo : potObj.Codigo } })
}

//* POST Mantenimiento Controllers

const createPotNominal = async( {Codigo, Descripcion, Valor})  => {    
    return await sequelize.query(`CALL sp_insert_PotNominal ('${Codigo}', '${Descripcion}', ${Valor})`)
}

const createCentResp = async({CodCR, NombreCR, CodCRPadre, abreviatura}) => {
    return await sequelize.query(`CALL sp_insert_CentroResp ('${CodCR}', '${NombreCR}', '${CodCRPadre}', '${abreviatura}')`)
}

//* PUT Mantenimiento Controllers
const deletePotNominal = async( potId ) => {
    return await xfopotnominal.destroy( { where: { Codigo : potId } })
}


module.exports = {
    createPotNominal,
    getAdm,
    getAlmacen,
    getContrat,
    getOpInfo,
    getOpMant,
    getPotNominal,

    getGrupo,
    createCentResp,
    updatePotNominal,
    deletePotNominal
}