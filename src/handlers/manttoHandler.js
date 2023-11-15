const { getPotNominal, createPotNominal } = require("../controllers/manttoController")


const getPotNominalHandler = async (req, res) => {
    try {
        const [potNomal] = await getPotNominal();
        
        res.status(200).json(potNomal);
    } catch (error) {
        res.status(200).json({ error: error.message});
    }
}

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
    getPotNominalHandler,
    createPotNominalHandler
}