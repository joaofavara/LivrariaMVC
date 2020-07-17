const {booksModel} = require('../models/index');

module.exports = {
    getBooks(req, res) {
        booksModel.getBooks()
            .then((result) => {
                console.log(result);
                res.status(200).json(result);
            })
            .catch((error) => {
                res.status(400).json(error);
            })
    },

    async saveBook(req, res, next) {
        try {
            const { name, authors, pages, genre } = req.body;
            const result = await booksModel.saveBook(name, authors, pages, genre);
            res.status(200).send(result);
        } catch (error) {
            next(error);
        }
    },

    async getOneBook(req, res, next) {
        try { 
            const id = req.params.id;
            const result = await booksModel.getOneBook(id)
            res.status(200).send(result);
        } catch (error) {
            next(error);
        }
    },

    async updateBook(req, res) {
        try {
            const id = req.params.id;
            const body = req.body;
            const result = await booksModel.updateBook(id, body);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async removeBook(req, res) {
        try {
            const id = req.params.id;
            const result = await booksModel.removeBook(id);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}