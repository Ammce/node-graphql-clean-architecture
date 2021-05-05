import { Request, Response } from "express";
import { UserGateway } from "../../db/gateways";

export default (req: Request, res: Response) => {
  return { req, res, db: { user: new UserGateway() } };
};
