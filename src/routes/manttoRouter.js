const { Router } = require("express")
const {
    createCentRespHandler,
    createGrupoHandler,
    createPotNominalHandler,
    deletePotNominalHandler,
    geContratista,
    getAdmSistema,
    getAlmacenHandler,
    getByIdPotNomHandler,
    getByIdGrupoHandler,
    getByIdCentRespHandler,
    getGrupoHandler,
    getOperInfo,
    getOperMantRed,
    getPotNominalHandler,
    updateCentRespHandler,
    updateGrupoHandler,
    updatePotNominalHandler,
} = require("../handlers/manttoHandler")

const manttoRouter = Router();

//* Mantenimiento Potencia Nominal
manttoRouter.get("/pn", getPotNominalHandler);
manttoRouter.get("/pn/:potId", getByIdPotNomHandler);
manttoRouter.post("/pn", createPotNominalHandler);
manttoRouter.put("/pn/:potId", updatePotNominalHandler)
manttoRouter.delete("/pn/:potId", deletePotNominalHandler)


//* Mantenimiento Centro de Responsabilidad
manttoRouter.get("/adm", getAdmSistema);
manttoRouter.get("/alm", getAlmacenHandler);
manttoRouter.get("/coi", getOperInfo);
manttoRouter.get("/cpt", geContratista);
manttoRouter.get("/omr", getOperMantRed);
manttoRouter.get("/cr/:idCr", getByIdCentRespHandler)

manttoRouter.post("/cr", createCentRespHandler);
manttoRouter.put("/cr", updateCentRespHandler);


//* Mantenimiento Grupos
manttoRouter.get("/gpo/:grupo", getGrupoHandler);
manttoRouter.get("/:idGrupo/:id", getByIdGrupoHandler);

manttoRouter.post("/gpo", createGrupoHandler);
manttoRouter.put("/gpo", updateGrupoHandler);


module.exports = manttoRouter;
