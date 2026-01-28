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
                    id: String(dummyAuthors.length + 1),
                    name,
                    age
                };
                dummyAuthors.push(newAuthor);
                return newAuthor;
            }catch(err){
                throw new Error('Failed to add author');
            }
        },
        addBook: (_, { title, author, authorId }) => {
            try {
                const newBook = {
                    id: String(dummyBooks.length + 1),
                    title,
                    author,
                    authorId
                };
                dummyBooks.push(newBook);
                return newBook;
            } catch (err) {
                throw new Error('Failed to add book');
            }

        }
    }
};

export default resolvers;