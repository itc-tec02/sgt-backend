const { createUser } = require("../controllers/usuarioController")


const getUsersHandler = (req, res) => {
    const { name } = req.query;
    if (name !== undefined) {
        res.status(200).send(`Quiero mostrar todo slos que se llamen: ${name}`);
    }else {
        res.status(200).send("Se mostrará todos los Usuarios");
    }
    
}

const getuserHandler = (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Va enviar el detalle del Usuario de ID  ${id}`)
}

const createUserHandler = async (req, res) => {
    try {

        const { codigo, Nombres, Apellidos, Pass, Estado, NombreAbrev, CodUsuarioSOR, flagSAOC, cargo } = req.body;
        console.log(req.body);
        const newUser = await createUser(codigo, Nombres, Apellidos, Pass, Estado, NombreAbrev, CodUsuarioSOR, flagSAOC, cargo)        
        res.status(200).json(newUser);
        
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateUserHandler = (req, res) => {
    res.status(200).send("Estoy en la actualización de un Usuario")
}

const deleteUserHandler = (req, res) => {
    res.status(200).send("Estoy en la eliminación lógica (activo - inactivo) de un Usuario")
}


module.exports = {
    getUsersHandler,
    getuserHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler
}