const typeDefs = `#graphql
    type Book {
        id: ID!
        title: String!
        gener: String!
        authorId: ID!
        author: Author
    }

    type Author {
        id: ID!
        name: String!
        age: Int!
        books: [Book]
    }

    type Query {
        book(id: ID!): Book
        books: [Book]
        author(id: ID!): Author
        authors: [Author]
    }
    
    type Mutation {
        addAuthor(name: String!, age: Int!): Author
        addBook(title: String!, gener: String!, authorId: ID!): Book   
    }
`;

export default typeDefs;