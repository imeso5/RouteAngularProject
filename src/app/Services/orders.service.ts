import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShippingAddress } from '../Interfaces/shipping-address';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _HttpClient:HttpClient) { }


  createCashOrder(_id:string, _order:ShippingAddress): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/orders/'+_id, {
      headers: {
        token: localStorage.getItem('userToken')!,
      },
    });
  }

  getAllOrders(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/orders', {
      headers: {
        token: localStorage.getItem('userToken')!,
      },
    });
  }

  getUserOrders(_id:string): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/orders/user/' + _id, {
      headers: {
        token: localStorage.getItem('userToken')!,
      },
    });
  }


  // checkOutSession(_id:string ,_ShippingAdress:ShippingAddress): Observable<any> {
  //   return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/orders/checkout-session/' + _id + "?url=http://localhost:4200" + _ShippingAdress
  //   , {headers: {
  //       token: localStorage.getItem('userToken') || '',
  //     },
  //   });
  // }

  checkOutSession(cartId: string, shippingAddress: ShippingAddress): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`, shippingAddress, {
      headers: {
        token: localStorage.getItem('userToken') || ''

      }

    });

  }

}
