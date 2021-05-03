import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import path from "path";

export default (app: Application) => {
  app.use(express.json());
  app.use(cookieParser());
  app.use(helmet());
  app.use("/assets", express.static(`${path.resolve()}/src/assets`));

  app.get("/healthcheck", (req: Request, res: Response) => {
    res.send("OK");
  });
};
