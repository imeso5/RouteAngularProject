import { Component, Input, OnInit } from '@angular/core';
import { OrderSummary } from 'src/app/Interfaces/order-summary';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  @Input() orderSummary!:OrderSummary

}
