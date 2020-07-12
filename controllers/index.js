const express = require('express');
const controllerLivros = require('./controller');
const router = express.Router();

router.get('/', controllerLivros.getLivros);
router.post('/save', controllerLivros.saveLivros);

module.exports = router;