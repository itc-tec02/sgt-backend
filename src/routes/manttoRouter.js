const { Router } = require("express")
const {
    createPotNominalHandler,
    geContratista,
    getAdmSistema,
    getAlmacenHandler,
    getOperInfo,
    getOperMantRed,
    getPotNominalHandler,

    getGrupoHandler,    
} = require("../handlers/manttoHandler")

const manttoRouter = Router();

//* Mantenimiento Potencia Nominal
manttoRouter.get("/pn", getPotNominalHandler);
manttoRouter.post("/pn", createPotNominalHandler);

//* Mantenimiento Centro de Responsabilidad
manttoRouter.get("/adm", getAdmSistema);
manttoRouter.get("/alm", getAlmacenHandler);
manttoRouter.get("/coi", getOperInfo);
manttoRouter.get("/cpt", geContratista);
manttoRouter.get("/omr", getOperMantRed);

// manttoRouter.post("/adm", createAdmSistema);
// manttoRouter.post("/alm", createAlmacen);
// manttoRouter.post("/coi", createOperInfo);
// manttoRouter.post("/cpt", createontratista);
// manttoRouter.post("/omr", createOperMant);

//* Mantenimiento Grupos
manttoRouter.get("/gpo/:grupo", getGrupoHandler);

module.exports = manttoRouter;