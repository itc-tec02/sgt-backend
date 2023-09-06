const getTrafosHandler = (req , res) => {
    res.status(200).send("Estoy en Trafos")
}
const getTrafoHandler = (req , res) => {
    res.status(200).send("Estoy detalle de un Trafo")
}
const createTrafoHandler = (req , res) => {
    res.status(200).send("Estoy la creacion de un Trafo")
}
const updateTrafoHandler = (req , res) => {
    res.status(200).send("Estoy en la actualización de un Trafo")
}
const deleteTrafoHandler = (req , res) => {
    res.status(200).send("Estoy en la eliminación lógica (activo - inactivo) de un Trafo")
}


module.exports = {
    getTrafosHandler,
    getTrafoHandler,
    createTrafoHandler,
    updateTrafoHandler,
    deleteTrafoHandler,
}