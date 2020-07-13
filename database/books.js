const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    type: String,
    name: String,
    authors: Array,
    pages: Number,
    genre: String,
    isDeleted: Boolean
});

module.exports = mongoose.model('Books', bookSchema);