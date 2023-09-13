const { Router } = require("express");
const userRouter = require("./usersRouter");
const trafoRouter = require("./trafosRouter");
const ordersRouter = require("./ordersRouter");

const mainRouter = Router();

mainRouter.use("/users",userRouter)

mainRouter.use("/trafos",trafoRouter)

mainRouter.use("/orders", ordersRouter)


module.exports = mainRouter;


