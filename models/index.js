module.exports = (mongooseModel) => {
    return { 
        async getLivros() {
            return await mongooseModel.find({});
        },

        async saveLivros({nome, autores, paginas, genero}) {
            return await mongooseModel.create({
                nome,
                autores,
                paginas,
                genero
            })
        }   
    }
};