import { Product } from '../Product/product.types';

export type User = {
  id: string;
  name: string;
  age: number;
  products: Product[] | string[];
};
