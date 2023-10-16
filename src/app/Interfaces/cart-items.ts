import { Product } from "./product";

export interface CartItems {
  count: number;
  _id: string;
  product: Product;
  price: number;
}
