import { Component, OnInit } from '@angular/core';
import { OrderSummary } from 'src/app/Interfaces/order-summary';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css'],
})
export class AllOrdersComponent implements OnInit {
  userOrders!:OrderSummary[]
  constructor(private _OrdersService: OrdersService) {}
  ngOnInit(): void {
    this._OrdersService
      .getUserOrders(localStorage.getItem('userId')!)
      .subscribe((res) => {
        console.log(res);
        this.userOrders=res
      });
  }
}
