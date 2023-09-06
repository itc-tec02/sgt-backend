
const getUsersHandler = (req, res) => {
    const { name } = req.query;
    if (name !== undefined) {
        res.status(200).send(`Quiero mostrar todoslos que se llamen: ${name}`);
    }else {
        res.status(200).send("Se mostrará todos los Usuarios");
    }
    // name? res.status(200).send(`Quiero mostrar todoslos que se llamen: ${name}`) : res.status(200).send("Se mostrará todos los Usuarios");
}

const getuserHandler = (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Va enviar el detalle del Usuario de ID  ${id}`)
}

const createUserHandler = (req, res) => {
    const { name, email, phone } = req.body;
    res.status(200).send(`
        Crea nuevo usuario con:
        name: ${name},
        email: ${email} y 
        phone: ${phone}
    `)
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