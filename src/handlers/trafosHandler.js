const { createTrafo, getAllTrafos, getTrafobyId, searchTrafoByIndustria, updateTrafo, deleteTrafo } = require("../controllers/trafoController");

const getTrafosHandler = async (req , res) => {
    try {

        const { fabricante } = req.query;
        const trafos = fabricante ? await searchTrafoByIndustria(fabricante) : await getAllTrafos();

        res.status(200).json(trafos)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getTrafoByIdHandler = async (req , res) => {
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
const updateTrafoHandler = async (req , res) => {
    try {
        const {id} = req.params
        if(!id) throw new Error("No se especificó un ID de Puesto");

        const trafo = await getTrafobyId(id);
        if(!trafo) throw new Error(`No existe puesto con Id ${id}`)

        const bodyTrafo = {...req.body};
        if(!bodyTrafo) throw new Error("Body undefined")

        const [editedTrafo] = await updateTrafo(bodyTrafo, id)
        res.status(200).json(editedTrafo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
const deleteTrafoHandler = async (req , res) => {
    try {
        const { id } = req.params; // { id:  999 }
        
        if( !id ) throw new Error("Not Id Provided")
        
        const deleteTrafoo = await deleteTrafo(id)
        
        res.status(200).json(deleteTrafoo);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getTrafosHandler,
    getTrafoByIdHandler,
    createTrafoHandler,
    updateTrafoHandler,
    deleteTrafoHandler,
}