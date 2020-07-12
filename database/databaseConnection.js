module.exports = async () => { 
    const mongoose = require('mongoose');

    try {
        await mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Mongo connected ...');
    } catch (error) {
        console.log(error);
    }
}