const { Router } = require("express")
const {
    getPotNominalHandler,
    createPotNominalHandler,
} = require("../handlers/manttoHandler")

const manttoRouter = Router();

manttoRouter.get("/pn", getPotNominalHandler);
manttoRouter.post("/pn", createPotNominalHandler);

manttoRouter.get("/cr", getPotNominalHandler);

module.exports = manttoRouter;