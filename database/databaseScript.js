async function script() {
    const mongoose = require('mongoose');

    try {
        await mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Mongo connected ...');
        const db = mongoose.connection;
        db.createCollection('Livros');
    } catch (error) {
        console.log(error);
    }
};

script();