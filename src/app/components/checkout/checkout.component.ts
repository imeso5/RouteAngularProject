import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ShippingAddress } from 'src/app/Interfaces/shipping-address';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkOutForm!: FormGroup;
  cartId!: string;
  constructor(
    private _OrdersService: OrdersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.checkOutForm = new FormGroup({
      details: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl(''),
    });
    this.activatedRoute.params.subscribe((params) => {
      this.cartId = params['cartId'];
      console.log(params);
    });
  }
  checkOut() {
    const order: ShippingAddress = {
      details: this.checkOutForm.controls['details'].value,
      phone: this.checkOutForm.controls['phone'].value,
      city: this.checkOutForm.controls['city'].value,
    };
    this._OrdersService.checkOutSession(this.cartId, order).subscribe({
      next: (res: any)=>{
      console.log(res);
      location.href=res.session.url;
      }
    });
  }
}
