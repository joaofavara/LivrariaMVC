module.exports = (mongooseBooksModel) => {
    return { 
        async getBooks() {
            return await mongooseBooksModel.find({
                isDeleted: false
            });
        },

        async saveBook({name, authors, pages, genre}) {
            return await mongooseBooksModel.create({
                type: 'book',
                isDeleted: false,
                name,
                authors,
                pages,
                genre,
            })
        },

        async getOneBook(id) {
            return await mongooseBooksModel.find({
                _id: id,
                isDeleted: false,
            })
        },

        async updateBook(id, payload) {
            return await mongooseBooksModel.findOneAndUpdate({_id: id}, payload);
        },

        async removeBook(id) {
            return await mongooseBooksModel.findOneAndUpdate({_id: id}, { isDeleted: true });
        }
    }
};