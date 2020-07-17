const mongooseBooksModel = require('../database/books');
const handleErrors = require('../handleErrors/errors');
const booksModel = require('./model.book')(mongooseBooksModel, handleErrors);

module.exports = {
    booksModel
}