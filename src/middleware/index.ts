import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";

import { ApolloServer } from "apollo-server-express";
import mergedTypeDefs from "./typedefs";
import resolvers from "./resolvers";
import setupContext from "./context";
import { AuthDirective } from "../directives/authDirective";

export default (app: Application) => {
  app.use(express.json());
  app.use(cookieParser());

  // GraphQL Routes
  const server = new ApolloServer({
    typeDefs: mergedTypeDefs,
    resolvers,
    context: ({ req, res }) => setupContext(req, res),
    schemaDirectives: {
      auth: AuthDirective,
    },
  });
  server.applyMiddleware({ app: app, path: "/graphql" });

  // TODO API Routess

  app.get("/healthcheck", (req: Request, res: Response) => {
    res.send("OK");
  });
};
