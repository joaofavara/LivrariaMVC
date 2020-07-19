const {booksModel} = require('../models/index');
const { validationResult } = require('express-validator')

module.exports = {
    getBooks(req, res, next) {
        booksModel.getBooks()
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((error) => {
                error.httpStatusCode = 500;
                next(error)
            })
    },

    saveBook(req, res, next) {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            const err = new Error(`Validation parameters to save the book - ${errors.array()[0].msg}`);
            err.httpStatusCode = 422;
            return next(err);
        }

        const body = req.body;
        booksModel.saveBook({ ...body })
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((error) => {
                error.httpStatusCode = 500;
                next(error);
            });
    },

    getOneBook(req, res, next) {
        const id = req.params.id;
        booksModel.getOneBook(id)
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((error) => {
                error.httpStatusCode = 500;
                next(error);
            })
    },

    updateBook(req, res, next) {
        const id = req.params.id;
        const body = req.body;
        booksModel.updateBook(id, body)
            .then((result) => {
                res.status(200).send(result);
            })
            .catch ((error) => {
                error.httpStatusCode = 500;
                next(error);
            })
    },

    removeBook(req, res, next) {
        const id = req.params.id;
        booksModel.removeBook(id)
            .then((result) => {
                res.status(200).send(result);
            })
            .catch ((error) => {
                error.httpStatusCode = 500;
                next(error);
            })
    }
}