const { createTrafo, getAllTrafos, getTrafobyId, searchTrafoByIndustria  } = require("../controllers/trafoController");

const getTrafosHandler = async (req , res) => {
    try {

        const { fabricante } = req.query;
        const trafos = fabricante ? await searchTrafoByIndustria(fabricante) : await getAllTrafos();

        res.status(200).json(trafos)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getTrafoHandler = async (req , res) => {
    try {
        const { id } = req.params;
        console.log(id);
        if(!id) return;

        const trafo = await getTrafobyId(id);
        if(!trafo) {
           res.status(404).json({ Message: `No se encontró Transformador de id: ${id}` }) 
        }else {
            res.status(200).json(trafo)
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createTrafoHandler = async (req , res) => {
    try {

        const trafoBody = {...req.body};
        if(!trafoBody) return

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