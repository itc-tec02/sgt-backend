const { 
    getPotNominal,
    createPotNominal,
    getAdm,
    getAlmacen,
    getOpInfo,
    getContrat,
    getOpMant,
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

const getAdmSistema = async () => {
    try {
        const admSistema = await getAdm();
        if(!admSistema) return

        res.status(200).json( admSistema )
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}
const getAlmacenHandler = async () => {
    try {
        const almacen = await getAlmacen();
        if(!almacen) return

        res.status(200).json( almacen )
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}
const getOperInfo = async () => {
    try {
        const operInfo = await getOpInfo();
        if(!operInfo) return

        res.status(200).json( operInfo )
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}
const geContratista = async () => {
    try {
        const contratista = await getContrat();
        if(!contratista) return

        res.status(200).json( contratista )
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}
const getOperMantRed = async () => {
    try {
        const opMantRed = await getOpMant();
        if(!opMantRed) return

        res.status(200).json( opMantRed )
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}

//* POST Mantenimiento Handlers

const createPotNominalHandler = async (req, res) => {
    try {
        const potNomalBody = {...req.body};
        if(!potNomalBody) return
        
        const newPotNomal = await createPotNominal(potNomalBody)
        res.status(200).json(newPotNomal);
    } catch (error) {
        res.status(200).json({ error: error.message});
    }
}


module.exports = {
    createAdmSistema,
    createAlmacen,
    createontratista,
    createOperInfo,
    createOperMant,
    createPotNominalHandler,
    geContratista,
    getAdmSistema,
    getAlmacenHandler,
    getOperInfo,
    getOperMantRed,
    getPotNominalHandler,
}