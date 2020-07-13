const express = require('express');
const bodyParser = require('body-parser');
const routerBooks = require('./controllers/index');
const mongodb = require('./database/databaseConnection')();

const app = express(); 

app.use(bodyParser.json());

app.use('/api/', routerBooks);

app.listen(3000, () => {
    console.log('The app is running ...');
})