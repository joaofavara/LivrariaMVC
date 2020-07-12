const express = require('express');
const bodyParser = require('body-parser');
const routerLivros = require('./controllers/index');
const mongodb = require('./database/databaseConnection')();


const app = express(); 

app.use(bodyParser.json());

app.use('/api/', routerLivros);

app.listen(3000, () => {
    console.log('The app is running ...');
})