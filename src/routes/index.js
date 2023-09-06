const { Router } = require("express");
const userRouter = require("./usersRouter");
const trafoRouter = require("./trafosRouter");

const mainRouter = Router();

mainRouter.use("/users",userRouter)

mainRouter.use("/trafos",trafoRouter)


module.exports = mainRouter;


