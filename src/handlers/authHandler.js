const { checkToken, login } = require("../controllers/authController")

const getToken = async (req, res) => {
    try {
        const token = req.headers.authorization;
        // console.log(token);
        const resp = await checkToken(token)
        res.status(200).json(resp);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
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