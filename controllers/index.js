const express = require('express');
const controllerBooks = require('./controller.books');
const router = express.Router();

router.get('/books', controllerBooks.getBooks);
router.post('/books/save', controllerBooks.saveBook);
router.get('/books/:id', controllerBooks.getOneBook);
router.put('/books/:id', controllerBooks.updateBook);
router.delete('/books/:id', controllerBooks.removeBook);

module.exports = router;