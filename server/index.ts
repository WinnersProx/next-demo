import express from "express";
import next from "next";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./resolvers/books-resolvers";
import { typeDefs } from './graphql-types';

const app = next({ dev: true });

const handle = app.getRequestHandler();

const port = 4200;

app.prepare().then(() => {
  const server = express();

  // apply needed middlewares to the server

  /** Initialize appolo server */
  const apolloServer = new ApolloServer({
    introspection: true,
    playground: true,
    resolvers,
    typeDefs,
  } as any);

  apolloServer.applyMiddleware({
    app: server,
    path: '/graphql'
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log("> GraphQL Server Listening on port ", port);
  });
});
