
module.exports = (mongooseBooksModel) => {
    return { 
        async getBooks() {
            try {
                return await mongooseBooksModel.find({
                    isDeleted: false
                });
            } catch (error) {
                throw new Error('Error getBooks');
            }
        },

        async saveBook({name, authors, pages, genre}) {
            try {
                return await mongooseBooksModel.create({
                    type: 'book',
                    isDeleted: false,
                    name,
                    authors,
                    pages,
                    genre,
                })
            } catch (error) {
                throw new Error('Error saveBook');
            }
        },

        async getOneBook(id) {
            try {
                return await mongooseBooksModel.find({
                    _id: id,
                    isDeleted: false,
                })
            } catch (error) {
                throw new Error('Error getOneBook')
                // 
            }
        },

        async updateBook(id, payload) {
            try {
                return await mongooseBooksModel.findOneAndUpdate({_id: id}, payload);
            } catch (error) {
                throw new Error('Error updateBook')
            }
        },

        async removeBook(id) {
            try {
                return await mongooseBooksModel.findOneAndUpdate({_id: id}, { isDeleted: true });
            } catch (error) {
                throw new Error('Error removeBook')
            }
        }
    }
};