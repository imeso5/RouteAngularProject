import { CartItems } from "./cart-items";

export  interface Cart {
  _id: string;
  cartOwner: string;
  products: CartItems[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  totalCartPrice: number;
}
