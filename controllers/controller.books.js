const {booksModel} = require('../models/index');

module.exports = {
    async getBooks(req, res) {
        const result = await booksModel.getBooks();
        console.log(result);
        res.status(200).send(result);
    },

    async saveBook(req, res) {
        const body = req.body;
        const result = await booksModel.saveBook({...body});
        res.status(200).send(result);
    },

    async getOneBook(req, res) {
        const id = req.params.id;
        const result = await booksModel.getOneBook(id)
        res.status(200).send(result);
    },

    async updateBook(req, res) {
        const id = req.params.id;
        const body = req.body;
        const result = await booksModel.updateBook(id, body);
        res.status(200).send(result);
    },

    async removeBook(req, res) {
        const id = req.params.id;
        const result = await booksModel.removeBook(id);
        res.status(200).send(result);
    }
}