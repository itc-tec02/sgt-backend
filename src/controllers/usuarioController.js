const { Usuario } = require("../db")

const createUser = async (CodUsuario, Nombres, Apellidos, Password, Estado, NombreAbrev, CodUsuarioSOR, flagSAOC, cargo) => {
    return await Usuario.create({ CodUsuario, Nombres, Apellidos, Password, Estado, NombreAbrev, CodUsuarioSOR, flagSAOC, cargo })
}

module.exports = {createUser}