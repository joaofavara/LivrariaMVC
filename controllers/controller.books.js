const {booksModel} = require('../models/index');
const { validationResult } = require('express-validator')

module.exports = {
    async getBooks(req, res, next) {
        try {
            const result = await booksModel.getBooks();
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    },

    async saveBook(req, res, next) {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            const err = new Error(`Validation parameters to save the book - ${errors.array()[0].msg}`);
            err.httpStatusCode = 422;
            return next(err);
        }

        try {
            const body = req.body;
            const result = await booksModel.saveBook({ ...body })
            res.status(200).send(result);
        } catch (err) {
            next(err);
        }
    },

    async getOneBook(req, res, next) {
        try {
            const id = req.params.id;
            const result = await booksModel.getOneBook(id)
            res.status(200).send(result);
        } catch (err) {
            next(err);
        }
    },

    async updateBook(req, res, next) {
        try {
            const id = req.params.id;
            const body = req.body;
            const result = await booksModel.updateBook(id, body)
            res.status(200).send(result);
        } catch (err) {
            next(err);
        }
    },

    async removeBook(req, res, next) {
        try {
            const id = req.params.id;
            const result = await booksModel.removeBook(id)
            res.status(200).send(result);
        } catch (err) {
            next(err);
        }
    }
}