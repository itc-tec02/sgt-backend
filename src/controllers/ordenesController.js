const { xfo_OrdenTrabajo } = require("../db")
const { Op } = require("sequelize");

const getOrdenes = async () => {
    return await xfo_OrdenTrabajo.findAll({ limit:100, order: [['CodxfoOrdenTrabajo','DESC']] })
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