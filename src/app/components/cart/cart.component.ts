import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Interfaces/cart';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts!: Cart;
  constructor(private _CartService: CartService,private router:Router) {}

  ngOnInit(): void {
    this._CartService.getLoggedUserCart().subscribe({
      next: (res: any) => {
        console.log(res);
      }})


    this._CartService.updateproducts.subscribe({
      next: (res: any) => {
        if (res) {
          this.updateItemsList();
          console.log(res);
        }
      },
      error:()=>{
        this.router.navigate(["home"])
      }
    });
    this.updateItemsList();


  }
  updateItemsList() {
    this._CartService.getLoggedUserCart().subscribe({
      next: (res: any) => {
        this.cartProducts = res.data;
      },
    });
  }

  clearCartItem() {
    this._CartService.clearCart().subscribe({
      next: (res: any) => {
        console.log(res);
        this._CartService.updateproducts.emit(true);
      },
    });
    this.router.navigate(["home"]);
  }
}
