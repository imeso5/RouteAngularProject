import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
import { WishService } from 'src/app/Services/wish.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: Product;

  constructor(private _Wish: WishService) {}

  addToWishList() {
    this._Wish.addToWishList(this.product._id).subscribe({
      next: (res: any) => {
        console.log(res);
      },
    });
  }
}
