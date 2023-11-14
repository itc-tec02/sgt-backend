const { createPuesto, getAllPuestos, getPuestobyId } = require("../controllers/puestoController");

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
        
    } catch (error) {
        
    }
}

const getPuestoHandler = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const updatePuestoHandler = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const deletePuestoHandler = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    getPuestosHandler,
    getPuestoHandler,
    createPuestoHandler,
    updatePuestoHandler,
    deletePuestoHandler
}