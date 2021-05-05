import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";

import { ApolloServer } from "apollo-server-express";
import mergedTypeDefs from "./typedefs";
// import { resolvers } from "../tempResolvers/index";
import resolvers from "./resolvers";

export default (app: Application) => {
  app.use(express.json());
  app.use(cookieParser());

  // GraphQL Routes
  const server = new ApolloServer({
    typeDefs: mergedTypeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res, db: "mongoDB" }),
  });
  server.applyMiddleware({ app: app, path: "/graphql" });

  // TODO API Routess

  app.get("/healthcheck", (req: Request, res: Response) => {
    res.send("OK");
  });
};
