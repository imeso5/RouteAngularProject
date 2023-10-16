import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartCount:number=0;
isUserLoggedIn:boolean=false;
  constructor(private _Authservices:AuthService, private _CartService:CartService){

  }
  ngOnInit(): void {

    this._Authservices.isUserLoggedIn.subscribe({
      next:(res)=>[this.isUserLoggedIn = res]
    })
   this._CartService.cartcount.subscribe(
    {
      next:(res)=>{
        this.cartCount=res
      }
    }
   );
  }
logOut(){
  this._Authservices.logOut();
}
}
