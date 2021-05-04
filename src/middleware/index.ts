import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";

import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "../tempGQLTypes/index";
import { resolvers } from "../tempResolvers/index";

export default (app: Application) => {
  app.use(express.json());
  app.use(cookieParser());

  // GraphQL Routes
  const server = new ApolloServer({
    // These will be defined for both new or existing servers
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
  });
  server.applyMiddleware({ app: app, path: "/graphql" });

  // TODO API Routess

  app.get("/healthcheck", (req: Request, res: Response) => {
    res.send("OK");
  });
};
