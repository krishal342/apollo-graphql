const typeDefs = `#graphql
    type Book {
        id: ID!
        title: String!
        author: String!
        authorId: ID!
    }

    type Author {
        id: ID!
        name: String!
        age: Int!
    }

    type Query {
        book(id: ID!): Book
        books: [Book]
        author(id: ID!): Author
        authors: [Author]
    }
    
    type Mutation {
        addAuthor(name: String!, age: Int!): Author
        addBook(title: String!, author: String!, authorId: ID!): Book   
    }
`;

export default typeDefs;