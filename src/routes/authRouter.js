const { Router } = require("express")
const { getToken, authLogin } = require("../handlers/authHandler")
// const jwt = require('jsonwebtoken');

const authRouter = Router();

authRouter.get("/", getToken )

authRouter.post("/login", authLogin )

// ... (When user logs in or signs up successfully)
// const token = generateToken(user);
// res.json({ token });

module.exports = authRouter;