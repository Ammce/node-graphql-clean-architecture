import { Request, Response } from "express";
import { UserGateway } from "./db/gateways";
export interface GQLArgs {
  id: string;
  userId: string;
  filter: any;
  input: any;
}

export interface GQLContext {
  req: Request;
  res: Response;
  db: {
    user: UserGateway;
  };
}
