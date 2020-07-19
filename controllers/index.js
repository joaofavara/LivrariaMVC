const express = require('express');
const { body } = require('express-validator');
const controllerBooks = require('./controller.books');
const router = express.Router();

router.get('/books', controllerBooks.getBooks);

router.post('/books/save',
    [
        body('name', 'Name must be string').isString(),
        body('authors', 'Authors must be array of strings').isArray(),
        body('pages', 'Pages must be number').isNumeric(),
        body('genre', 'Genre must be string').isString(),
    ],
controllerBooks.saveBook);

router.get('/books/:id', controllerBooks.getOneBook);

router.put('/books/:id', controllerBooks.updateBook);

router.delete('/books/:id', controllerBooks.removeBook);

module.exports = router;