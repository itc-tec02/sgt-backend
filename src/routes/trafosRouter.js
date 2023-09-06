const { Router } = require("express")
const { 
    getTrafosHandler,
    getTrafoHandler,
    createTrafoHandler,
    updateTrafoHandler,
    deleteTrafoHandler
} = require("../handlers/trafosHandler")

const trafoRouter = Router();



trafoRouter.get("/", getTrafosHandler )

trafoRouter.get("/:id", getTrafoHandler )

trafoRouter.post("/", createTrafoHandler )

trafoRouter.put("/", updateTrafoHandler )

trafoRouter.delete("/:id", deleteTrafoHandler )

module.exports = trafoRouter;