const { Router } = require("express")
const { 
    getTrafosHandler,
    getTrafoByIdHandler,
    createTrafoHandler,
    updateTrafoHandler,
    deleteTrafoHandler } = require("../handlers/trafosHandler")

const trafoRouter = Router();

trafoRouter.get("/", getTrafosHandler )

trafoRouter.get("/:id", getTrafoByIdHandler )

trafoRouter.post("/", createTrafoHandler )

trafoRouter.put("/:id", updateTrafoHandler )

trafoRouter.delete("/:id", deleteTrafoHandler )

module.exports = trafoRouter;