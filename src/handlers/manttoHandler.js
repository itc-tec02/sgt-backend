const { 
    createCentResp,
    createGrupo,
    createPotNominal,
    deletePotNominal,
    getAdm,
    getAlmacen,
    getbyIdPotNominal,
    getByIdGrupo,
    getByIdCentResp,
    getContrat,
    getGrupo,
    getOpInfo,
    getOpMant,
    getPotNominal,
    updateCentResp,
    updateGrupo,
    updatePotNominal,
} = require("../controllers/manttoController")

//* GET Mantenimiento Handlers

const getPotNominalHandler = async (req, res) => {
    try {
        const [potNomal] = await getPotNominal();
        
        res.status(200).json(potNomal);
    } catch (error) {
        res.status(200).json({ error: error.message});
    }
}
const getByIdPotNomHandler = async(req, res) => {
    try {
        const { potId } = req.params
        if(!potId) throw new Error("No se especificó ID de Potencia");

        const potNom = await getbyIdPotNominal(potId);
        if(!potNom) throw new Error(`No existe registro con id ${potId}`);

        res.status(200).json(potNom);     
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getAdmSistema = async (req, res) => {
    try {
        const [admSistema] = await getAdm();
        if(!admSistema) return

        res.status(200).json( admSistema )
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}
const getAlmacenHandler = async (req, res) => {
    try {
        const [almacen] = await getAlmacen();
        if(!almacen) return

        res.status(200).json( almacen )
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}
const getOperInfo = async (req, res) => {
    try {
        const [operInfo] = await getOpInfo();
        if(!operInfo) return

        res.status(200).json( operInfo )
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}
const geContratista = async (req, res) => {
    try {
        const [contratista] = await getContrat();
        if(!contratista) return

        res.status(200).json( contratista )
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}
const getOperMantRed = async (req, res) => {
    try {
        const [opMantRed] = await getOpMant();
        if(!opMantRed) return

        res.status(200).json( opMantRed )
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}
const getByIdCentRespHandler = async(req, res) => {
    try {
        const { idCr } = req.params;
        if(!idCr) throw new Error("No se especificó ID Centro Responsabilidad");

        const [byIdCentResp] = await getByIdCentResp(idCr);
        if(!byIdCentResp) throw  new Error(`No existe registro con id ${idCr}`)

        res.status(200).json(...byIdCentResp)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//* GET DE GRUPOS HANDLERS
const getGrupoHandler = async (req, res) => {
    try {
        const {grupo} = req.params;        
        if(!grupo) throw new Error("No se especificó código de Grupo")

        const [paramGrupo] = await getGrupo(grupo);

        res.status(200).json(paramGrupo)
    } catch (error) {
        res.status(400).json( {error: error.nessage });
    }
}

const getByIdGrupoHandler = async(req, res) => {
    try {
        const { idGrupo, id } = req.params;
        if(!idGrupo || !id) throw new Error("No se enviaron los parametros")

        const [grupo] = await getByIdGrupo(idGrupo,id)
        if(!grupo) throw new Error(`No existe registro con id ${idGrupo}`);
        res.status(200).json(...grupo) // Tenemos uqe hacer spread ya que no se porque trae un arreglo =(
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//* PUT Mantenimiento Handlers

const updatePotNominalHandler = async (req, res) => {
    try {
        const {potId} = req.params;
        if(!potId) throw new Error("No se especificó ID")

        const potNom = await getbyIdPotNominal(potId);
        if(!potNom) throw new Error(`No existe registro con id ${potId}`);

        const potNomBody = {...req.body}
        if(!potNomBody) throw new Error("Body undefined")

        const [editedPotNom] = await updatePotNominal(potNomBody, potId);

        res.status(200).json(editedPotNom);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
const updateCentRespHandler = async (req, res) => {
    try {
        const body = {...req.body};
        if(!body) throw new Error("Body undefined")

        const editCentResp = await updateCentResp(body);
        res.status(200).json(editCentResp)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateGrupoHandler = async(req, res) => {
    try {
        const body = {...req.body};
        if(!body) throw new Error("Body undefined")

        const newGrupo = await updateGrupo(body);
        res.status(200).json(newGrupo);
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//* POST Mantenimiento Handlers

const createPotNominalHandler = async (req, res) => {
    try {
        const potNomalBody = {...req.body};
        if(!potNomalBody) throw new Error("Body undefined")
        
        const [newPotNomal] = await createPotNominal(potNomalBody)
        res.status(200).json(newPotNomal);
    } catch (error) {
        res.status(200).json({ error: error.message});
    }
}

const createCentRespHandler = async (req, res) => {
    try {
        const body = {...req.body}
        if(!body) throw new Error("Body undefined")

        const newCentResp = await createCentResp(body)
        res.status(200).json(newCentResp);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createGrupoHandler = async(req, res) => {
    try {
        const body = {...req.body};
        if(!body) throw new Error("Body undefined")

        const newGrupo = await createGrupo(body);
        res.status(200).json(newGrupo);
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


//* DELETE Mantenimiento Handlers

const deletePotNominalHandler = async(req, res) => {
    try {
        const {potId} = req.params;
        if(!potId) throw new Error("Not Id Provided")
        
        const deletedPotNom = await deletePotNominal(potId)
        
        res.status(200).json(deletedPotNom);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createCentRespHandler,
    createGrupoHandler,
    createPotNominalHandler,
    deletePotNominalHandler,
    geContratista,
    getAdmSistema,
    getAlmacenHandler,
    getByIdPotNomHandler,
    getByIdCentRespHandler,
    getGrupoHandler,
    getOperInfo,
    getOperMantRed,
    getPotNominalHandler,
    updateCentRespHandler,
    updateGrupoHandler,
    updatePotNominalHandler,
    getByIdGrupoHandler,
}