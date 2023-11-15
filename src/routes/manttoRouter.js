const { Router } = require("express")
const {
    getPotNominalHandler,
    createPotNominalHandler,
} = require("../handlers/manttoHandler")

const manttoRouter = Router();

manttoRouter.get("/pn", getPotNominalHandler);
manttoRouter.post("/pn", createPotNominalHandler);

//* Centro de Responsabilidad
manttoRouter.get("/adm", getAdmSistema);
manttoRouter.get("/alm", getAlmacenHandler);
manttoRouter.get("/coi", getOperInfo);
manttoRouter.get("/cpt", geContratista);
manttoRouter.get("/omr", getOperMantRed);

manttoRouter.post("/adm", createAdmSistema);
manttoRouter.post("/alm", createAlmacen);
manttoRouter.post("/coi", createOperInfo);
manttoRouter.post("/cpt", createontratista);
manttoRouter.post("/omr", createOperMant);


module.exports = manttoRouter;