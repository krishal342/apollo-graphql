import { dummyBooks, dummyAuthors } from '../data/dummyData.js';

const resolvers = {
    Query: {
        book: (_, { id }) => {
            try {
                return dummyBooks.find(book => book.id === id);
            } catch (err) {
                throw new Error('Failed to fetch book');
            }
        },

        books: () => dummyBooks,

        author: (_, { id }) => {
            try {
                return dummyAuthors.find(author => author.id === id);
            } catch (err) {
                throw new Error('Failed to fetch author');
            }
        },

        authors: () => dummyAuthors
    },
    Mutation: {
        addAuthor: (_, { name, age }) => {
            try{
                const newAuthor = {
                    id: String(dummyAuthors.length + 101),
                    name,
                    age
                };
                dummyAuthors.push(newAuthor);
                return newAuthor;
            }catch(err){
                throw new Error('Failed to add author');
            }
        },
        addBook: (_, { title, gener, authorId }) => {
            try {
                const newBook = {
                    id: String(dummyBooks.length + 1),
                    title,
                    gener,
                    authorId
                };
                dummyBooks.push(newBook);
                return newBook;
            } catch (err) {
                throw new Error('Failed to add book');
            }

        }
    },
    Book:{
        author: (parent) =>{
            try{
                return dummyAuthors.find(author => author.id === parent.authorId);
            }catch(err){
                throw new Error('Failed to fetch author for the book');
            }
        }
    },
    Author:{
        books:(parent) =>{
            try{
                return dummyBooks.filter(book => book.authorId === parent.id);
            }catch(err){
                throw new Error('Failed to fetch books for the author');
            }
        }
    }

};

export default resolvers;