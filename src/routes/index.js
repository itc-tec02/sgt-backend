const { Router } = require("express");
const userRouter = require("./usersRouter");
const trafoRouter = require("./trafosRouter");
const ordersRouter = require("./ordersRouter");
const authRouter = require("./authRouter");


const mainRouter = Router();

mainRouter.use("/users",userRouter)

mainRouter.use("/trafos",trafoRouter)

mainRouter.use("/orders", ordersRouter)

mainRouter.use("/auth", authRouter)

// mainRouter.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
//   res.json({ message: 'This is a protected route.' });
// });


  
module.exports = mainRouter;


