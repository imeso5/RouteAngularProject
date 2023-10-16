import { Component } from '@angular/core';
import { WishService } from 'src/app/Services/wish.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  products: any[] = [];
  constructor(private _WishService: WishService) {}
  ngOnInit(): void {
    this._WishService.getLoggedUserWishList().subscribe((res) => {
      console.log(res);
      this.products = res.data;
    });
  }
}
