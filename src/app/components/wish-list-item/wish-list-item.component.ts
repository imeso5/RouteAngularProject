import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
import { WishService } from 'src/app/Services/wish.service';

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css'],
})
export class WishListItemComponent {
  @Input() product!: Product;

  constructor(private _Wish: WishService) {}

  addToWishList() {
    this._Wish.addToWishList(this.product._id).subscribe({
      next: (res: any) => {
        console.log(res);
      },
    });
  }
  RemoveitemFromWishList()
  {
    this._Wish.removeFromWishList(this.product._id).subscribe({
      next: (res: any) => {
        console.log(res);
      },
    });
  }
}
