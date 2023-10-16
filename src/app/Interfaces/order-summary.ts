import { CartItems } from "./cart-items"

export interface OrderSummary {
  taxPrice: number,
  shippingPrice: number,
  totalOrderPrice: number,
  paymentMethodType: string,
  isPaid: boolean,
  isDelivered: boolean,
  _Id:string,
  cartItems:CartItems
  paidAt:Date
  createdAt:Date
  updatedAt:Date
  id:string
}
