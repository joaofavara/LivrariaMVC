const mongooseModel = require('../database/livroModel');
const livrosModel = require('../models/index')(mongooseModel);

module.exports = {
    async getLivros(req, res) {
        const result = await livrosModel.getLivros();
        console.log(result);
        res.status(200).send(result);
    },

    async saveLivros(req, res) {
        const body = req.body;
        const result = await livrosModel.saveLivros({...body});
        res.status(200).send(result);
    }
}