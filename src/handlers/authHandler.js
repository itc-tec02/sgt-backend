const { getUserToken, login } = require("../controllers/authController")

const getToken = async (req, res) => {
    res.status(200).send("aqui debe sacar el token si es que existe")
}

const authLogin = async (req, res) => {
    const user = {...req.body}

    try {
        const resp = await login(user)
        res.status(200).json( resp )

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



module.exports = {
    getToken,
    authLogin,
}