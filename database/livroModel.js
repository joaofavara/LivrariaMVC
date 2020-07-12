const mongoose = require('mongoose');

const livroSchema = mongoose.Schema({
    nome: String,
    autores: Array,
    paginas: Number,
    genero: String
});

module.exports = mongoose.model('Livros', livroSchema);