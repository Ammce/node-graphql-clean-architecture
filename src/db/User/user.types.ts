import { Product } from "../Product/product.types";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  products: Product[] | string[];
};

export type UserWithToken = User & {
  token: string;
};
