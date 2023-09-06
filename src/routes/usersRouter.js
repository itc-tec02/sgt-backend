const { Router } = require("express")
const { 
    getUsersHandler, 
    getuserHandler, 
    createUserHandler, 
    updateUserHandler, 
    deleteUserHandler
} = require("../handlers/usersHandler")

const userRouter = Router();

userRouter.get("/", getUsersHandler )

userRouter.get("/:id", getuserHandler )

userRouter.post("/", createUserHandler )

userRouter.put("/", updateUserHandler )

userRouter.delete("/:id", deleteUserHandler )



module.exports = userRouter;