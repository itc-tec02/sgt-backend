const { segusuario, sequelize } = require("../db")


const getUsers = async () => {
    return await sequelize.query(`CALL sp_getUsers()`)
}

const createUser = async (CodUsuario, Nombres, Apellidos, Password, Estado, NombreAbrev, CodUsuarioSOR, flagSAOC, cargo) => {
    return await segusuario.create({ CodUsuario, Nombres, Apellidos, Password, Estado, NombreAbrev, CodUsuarioSOR, flagSAOC, cargo })
}

module.exports = {
    getUsers,
    createUser,

}