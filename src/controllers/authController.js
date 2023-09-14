const { segUsuario } = require("../db")
const { SECRET_KEY } = process.env
const jwt = require('jsonwebtoken');

const getUserToken = async (TrafoId) => {
    return await segUsuario.findByPk(TrafoId)
}
const generateUserToken = async (user) => {
    const dbUser =  await segUsuario.findOne({ where: { CodUsuario: user.id, password: user.password } })
    const payload = {
        id: dbUser.CodUsuario,
        username: dbUser.Nombres,
        lastname: dbUser.Apellidos,
        abrev: dbUser.Nombreabrev,
        role: "admin",
    }
    const options = { expiresIn: "12h" }
    return jwt.sign(payload, SECRET_KEY, options)

}

module.exports = {
    getUserToken,
    generateUserToken,
}

// const generateToken = (user) => {
//     const payload = {
//       id: user.id,
//       username: user.username,
//       // Add more user-related data as needed
//     };
  
//     const options = {
//       expiresIn: '1h', // Token expiration time (adjust as needed)
//     };
  
//     return jwt.sign(payload, SECRET_KEY, options);
//   };