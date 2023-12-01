const { segusuario, sequelize } = require("../db")
const { SECRET_KEY } = process.env
const jwt = require('jsonwebtoken');

const checkToken = async (token) => {
    const newDecoded = jwt.verify(token, SECRET_KEY, (error, decoded) => {
        if(error) {
            if(error.name === 'TokenExpiredError') throw new Error("Token expired");
            throw new Error('Token inválido');
        }
        return decoded
    });
    // const user = await segusuario.findByPk(newDecoded.payload);
    const [user] = await sequelize.query(`CALL sp_token_Check_login('${newDecoded.payload}')`)
    if(!user) throw new Error("No se encontró usuario.")

    const payload = {
        id: user.CodUsuario,
        username: user.Nombres,
        lastname: user.Apellidos,
        abrev: user.Nombreabrev,
        role: user.rol,
        perfil: user.perfil,
        perfil_desc: user.perfil_desc,
    }
    return { user: payload, token }
}

const login = async (user) => {
    // const dbUser =  await segUsuario.findOne({ where: { CodUsuario: user.id, password: user.password } })
    const [dbUser] = await sequelize.query(`CALL sp_prueba_login('${user.id}','${user.password}')`)
    if(!dbUser) throw new Error("No se encontró usuario.");
    
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
    checkToken,
    login,
}