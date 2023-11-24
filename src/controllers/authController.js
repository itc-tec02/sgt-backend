const { segusuario, sequelize } = require("../db")
const { SECRET_KEY } = process.env
const jwt = require('jsonwebtoken');

const checkToken = async (token) => {
    try {
        const resultado = jwt.verify(token, SECRET_KEY);
        console.log('Resultado es : ', resultado);    
    } catch (error) {
        console.log('El error es: ', error.message);
    }    
}

const login = async (user) => {
    // const dbUser =  await segUsuario.findOne({ where: { CodUsuario: user.id, password: user.password } })
    const [dbUser] = await sequelize.query(`CALL sp_prueba_login('${user.id}','${user.password}')`)
    if(!dbUser) throw new Error("User not found");
    
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