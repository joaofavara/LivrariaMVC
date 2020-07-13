const mongooseBooksModel = require('../database/books');
const booksModel = require('./model.book')(mongooseBooksModel);

module.exports = {
    booksModel
}