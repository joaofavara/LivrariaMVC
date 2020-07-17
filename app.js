const express = require('express');
const bodyParser = require('body-parser');
const routerBooks = require('./controllers/index');
const mongodb = require('./database/databaseConnection')();
const errorMiddleware = require('./handleErrors/errorMiddleware');

const app = express(); 

app.use(bodyParser.json());

//cors error
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authotization');
//     next();
// })

app.use('/api/', routerBooks, errorMiddleware);

app.listen(3000, () => {
    console.log('The app is running ...');
})