const { getOrdenes, getOrden, createOrden, updateOrden, deleteOrden,} = require ("../controllers/ordenesController")


const getOrdenesHandler = async (req, res) => {
    try {

        const ordenes = await getOrdenes();
        
        res.status(200).json(ordenes)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getOrdenByIdHandler = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const createOrdenHandler = async (req, res) => {

}

const updateOrdenHandler = async (req, res) => {

}

const deleteOrdenesHandler = async (req, res) => {

}


module.exports = {
    getOrdenesHandler,
    getOrdenByIdHandler,
    createOrdenHandler,
    updateOrdenHandler,
    deleteOrdenesHandler,
}