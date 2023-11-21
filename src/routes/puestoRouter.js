const { Router } = require("express");
const {
    getPuestosHandler,
    getPuestoByIdHandler,
    createPuestoHandler,
    updatePuestoHandler,
    deletePuestoHandler } = require("../handlers/puestoHandler");


const puestoRouter = Router();

puestoRouter.get("/", getPuestosHandler )

puestoRouter.get("/:id", getPuestoByIdHandler )

puestoRouter.post("/", createPuestoHandler )

puestoRouter.put("/:id", updatePuestoHandler )

puestoRouter.delete("/:id", deletePuestoHandler )

module.exports = puestoRouter;