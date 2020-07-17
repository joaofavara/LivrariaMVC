
module.exports = (mongooseBooksModel, handleError) => {
    return { 
        async getBooks() {
            try {
                return await mongooseBooksModel.find({
                    isDeleted: false
                });
            } catch (error) {
                throw new handleError.DatabaseError('Error getBooks');
            }
        },

        async saveBook(name, authors, pages, genre) {
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
                throw new handleError.DatabaseError('Error saveBook');
            }
        },

        async getOneBook(id) {
            try {
                if(!id) {
                    throw new handleError.ValidationError('Error validating the getOneBook')
                }

                return await mongooseBooksModel.find({
                    _id: id,
                    isDeleted: false,
                })
            } catch (error) {
                throw new handleError.DatabaseError('Error getOneBook')
                // 
            }
        },

        async updateBook(id, payload) {
            try {
                if(!id || !payload) {
                    throw new handleError.ValidationError('Error validating the updateBook')
                }

                return await mongooseBooksModel.findOneAndUpdate({_id: id}, payload);
            } catch (error) {
                throw new handleError.DatabaseError('Error updateBook')
            }
        },

        async removeBook(id) {
            try {
                if(!id) {
                    throw new handleError.ValidationError('Error validating the removeBook')
                }

                return await mongooseBooksModel.findOneAndUpdate({_id: id}, { isDeleted: true });
            } catch (error) {
                throw new handleError.DatabaseError('Error removeBook')
            }
        }
    }
};