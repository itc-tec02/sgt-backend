const { Router } = require("express")
const { getOrdenesHandler,
    getOrdenByIdHandler,
    createOrdenHandler,
    updateOrdenHandler,
    deleteOrdenesHandler
} = require("../handlers/ordenesHandler")

const ordersRouter = Router();

ordersRouter.get("/", getOrdenesHandler)

ordersRouter.get("/:id", getOrdenByIdHandler)

ordersRouter.post("/", createOrdenHandler)

ordersRouter.put("/", updateOrdenHandler)

ordersRouter.delete("/:id", deleteOrdenesHandler)

module.exports = ordersRouter;