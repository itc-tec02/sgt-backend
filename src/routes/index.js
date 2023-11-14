const { Router } = require("express");
const userRouter = require("./usersRouter");
const trafoRouter = require("./trafosRouter");
const ordersRouter = require("./ordersRouter");
const authRouter = require("./authRouter");
const puestoRouter = require("./puestoRouter");


const mainRouter = Router();

mainRouter.use("/users",userRouter)

mainRouter.use("/trafos",trafoRouter)

mainRouter.use("/orders", ordersRouter)

mainRouter.use("/auth", authRouter)

mainRouter.use("/puestos", puestoRouter)

module.exports = mainRouter;


