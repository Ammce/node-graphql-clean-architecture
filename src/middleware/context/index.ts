import { Request, Response } from "express";
import { UserGateway } from "../../db/gateways";

export default (req: Request, _: Response) => {
  return {
    req: {
      params: req.params,
      query: req.query,
      body: req.body,
      headers: req.headers,
    },
    db: { user: new UserGateway() },
  };
};
