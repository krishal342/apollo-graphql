import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import express from 'express';

import typeDefs from './schema/typeDefs.js';
import resolvers from './schema/resolvers.js';


const server = new ApolloServer({
    typeDefs,
    resolvers
});

await server.start();

const app = express();

app.use(
    '/graphql',
    express.json(),
    expressMiddleware(server)
);

app.listen(4000, () => {
    console.log('Server running at http://localhost:4000/graphql');
});
