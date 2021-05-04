import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./tempGQLTypes/index";
import { resolvers } from "./tempResolvers/index";

import registerMiddleware from "./middleware";

const startServer = async () => {
  const server = new ApolloServer({
    // These will be defined for both new or existing servers
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
  });

  const app = express();
  registerMiddleware(app);
  server.applyMiddleware({ app: app, path: "/graphql" });
  app.listen(3000, () => {
    console.log(`Server is up and running on port 3000`);
  });
};

startServer();
