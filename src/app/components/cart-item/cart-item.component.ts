import { Component, Input } from '@angular/core';
import { CartItems } from 'src/app/Interfaces/cart-items';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() cartItem!: CartItems;

  constructor(private _CartService: CartService) {}
  onUpdateProductCount(productId: string, count: number) {
    this._CartService.updateCartProductQuantity(productId, count).subscribe({
      next: (res: any) => {
        console.log(res);
        this._CartService.updateproducts.emit(true);
      },
    });
  }
  deleteCartItem(productId: string) {
    this._CartService.deleteCartItem(productId).subscribe({
      next: (res: any) => {
        console.log(res);
        this._CartService.updateproducts.emit(true);
      },
    });
  }
}
