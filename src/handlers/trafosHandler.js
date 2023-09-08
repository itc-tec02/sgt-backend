const { createTrafo } = require("../controllers/trafoController");

const getTrafosHandler = (req , res) => {
    res.status(200).send("Estoy en Trafos")
}
const getTrafoHandler = (req , res) => {
    res.status(200).send("Estoy detalle de un Trafo")
}
const createTrafoHandler = async (req , res) => {
    try {
        // const { TipoXfo, NroCIA, Fabricante } = req.body;

        const trafoBody = {...req.body};

        console.log(trafoBody);
        // const newTrafo = await createTrafo(TipoXfo, NroCIA, Fabricante);
        const newTrafo = await createTrafo(trafoBody);
        res.status(200).json(newTrafo)
        
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
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