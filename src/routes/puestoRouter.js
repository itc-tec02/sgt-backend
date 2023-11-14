const { Router } = require("express");
const {
    getPuestosHandler,
    getPuestoHandler,
    createPuestoHandler,
    updatePuestoHandler,
    deletePuestoHandler } = require("../handlers/puestoHandler");


const puestoRouter = Router();

puestoRouter.get("/", getPuestosHandler )

puestoRouter.get("/:id", getPuestoHandler )

puestoRouter.post("/", createPuestoHandler )

puestoRouter.put("/", updatePuestoHandler )

puestoRouter.delete("/:id", deletePuestoHandler )

module.exports = puestoRouter;