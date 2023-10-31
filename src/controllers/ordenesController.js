const { xfo_OrdenTrabajo, sequelize } = require("../db")
const { Op } = require("sequelize");

const getOrdenes = async (userId) => {
    // return await xfo_OrdenTrabajo.findAll({ limit:100, order: [['CodxfoOrdenTrabajo','DESC']] })
    return await sequelize.query(`CALL sp_get_otts('${userId}')`)
}
const getOrden = async (id) => {
    return await xfo_OrdenTrabajo.findByPk(id)
}

const createOrden = async (orden) => {
    return await xfo_OrdenTrabajo.create(orden)
}
const updateOrden = async (orden) => {
    return await xfo_OrdenTrabajo.update(orden, { where: { CodxfoOrdenTrabajo: orden.CodxfoOrdenTrabajo } })
}
const deleteOrden = async () => {
    return await xfo_OrdenTrabajo.findAll()
}


module.exports= {
    getOrdenes,
    getOrden,
    createOrden, 
    updateOrden,
    deleteOrden,
}