import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  cartcount:number =0;
  constructor(
    private _ProductService: ProductsService,
    private _CartService: CartService
  ) {}
  ngOnInit(): void {
    this._ProductService.getAllProducts().subscribe((res) => {
      console.log(res);
      this.products = res.data;
    });
    this._CartService.getLoggedUserCart().subscribe((res) => {
      this._CartService.cartcount.next(res.numOfCartItems)
      console.log(res);
      this.cartcount = res.length;
    });
  }
}
