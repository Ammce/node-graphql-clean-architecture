import { User } from '../User/user.types';
export type Product = {
  id: string;
  description: string;
  price: number;
  user: User | string;
};
