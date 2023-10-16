import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent {
  @Input() productId!: string;
  constructor(private _CartService: CartService) {}
  onAddToCart(productId: string) {
    this._CartService.addToCart(productId).subscribe({
      next: (res: any) => {
        console.log(res);
        this._CartService.cartcount.next(res.numOfCartItems);
      },
    });
  }
}
