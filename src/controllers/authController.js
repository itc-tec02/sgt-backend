const { segUsuario, sequelize } = require("../db")
const { SECRET_KEY } = process.env
const jwt = require('jsonwebtoken');

const getUserToken = async (TrafoId) => {
    return await segUsuario.findByPk(TrafoId)
}
const login = async (user) => {
    // const dbUser =  await segUsuario.findOne({ where: { CodUsuario: user.id, password: user.password } })
    const [dbUser] = await sequelize.query(`CALL sp_prueba_login('${user.id}','${user.password}')`)
    if(!dbUser) throw Error("User not found");
    console.log(dbUser)
    const payload = {
        id: dbUser.CodUsuario,
        username: dbUser.Nombres,
        lastname: dbUser.Apellidos,
        abrev: dbUser.Nombreabrev,
        role: dbUser.rol,
        perfil: dbUser.perfil,
        perfil_desc: dbUser.perfil_desc,
    }
    const options = { expiresIn: "8h" }
    return { user: payload , token: jwt.sign({payload: payload.id}, SECRET_KEY, options)}
}


module.exports = {
    getUserToken,
    login,
}