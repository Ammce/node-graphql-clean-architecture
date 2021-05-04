import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";

export default (app: Application) => {
  app.use(express.json());
  app.use(cookieParser());

  // GraphQL Routes

  // TODO API Routess

  app.get("/healthcheck", (req: Request, res: Response) => {
    res.send("OK");
  });
};
