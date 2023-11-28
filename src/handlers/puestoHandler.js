const { createPuesto, getAllPuestos, getPuestoById, updatePuesto } = require("../controllers/puestoController");

const getPuestosHandler = async (req, res) => {
    try {
        const puestos = await getAllPuestos();
        res.status(200).json(puestos)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const createPuestoHandler = async (req, res) => {
    try {

        const puesto = {...req.body};

        const newPuesto = await createPuesto(puesto);
        res.status(200).json(newPuesto);        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getPuestoByIdHandler = async (req, res) => {
    try {
        const { id } = req.params
        if(!id) throw new Error("No se especificó ID de Puesto")

        const [byIdPuesto] = await getPuestoById(id);
        if(!byIdPuesto) throw new Error(`No se econtró registro con ID de Puesto ${id}`)

        res.status(200).json(byIdPuesto)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updatePuestoHandler = async (req, res) => {
    try {
        const {id} = req.params
        if(!id) throw new Error("No se especificó un ID de Puesto");

        const puesto = await getPuestoById(id);
        if(!puesto) throw new Error(`No existe puesto con Id ${id}`)

        const bodyPuesto = {...req.body};
        if(!bodyPuesto) throw new Error("Body undefined")

        const [editedPuesto] = await updatePuesto(bodyPuesto, id)
        res.status(200).json(editedPuesto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deletePuestoHandler = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    getPuestosHandler,
    getPuestoByIdHandler,
    createPuestoHandler,
    updatePuestoHandler,
    deletePuestoHandler
}