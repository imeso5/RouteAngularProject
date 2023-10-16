import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, count } from 'rxjs';
import { CartItems } from '../Interfaces/cart-items';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartcount: BehaviorSubject<number> = new BehaviorSubject(0);
  updateproducts = new EventEmitter<boolean>();
  constructor(private _HttpClient: HttpClient) {}

  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/cart',
      { productId },
      {
        headers: {
          token: localStorage.getItem('userToken')!,
        },
      }
    );
  }

  getLoggedUserCart(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart', {
      headers: {
        token: localStorage.getItem('userToken')!,
      },
    });
  }

  updateCartProductQuantity(productId: string, count: number): Observable<any> {
    return this._HttpClient.put(
      'https://ecommerce.routemisr.com/api/v1/cart/' + productId,
      { count },
      {
        headers: {
          token: localStorage.getItem('userToken')!,
        },
      }
    );
  }

  deleteCartItem(productId: string): Observable<any> {
    return this._HttpClient.delete(
      'https://ecommerce.routemisr.com/api/v1/cart/' + productId,
      {
        headers: {
          token: localStorage.getItem('userToken')!,
        },
      }
    );
  }

  clearCart(): Observable<any> {
    return this._HttpClient.delete(
      'https://ecommerce.routemisr.com/api/v1/cart',
      {
        headers: {
          token: localStorage.getItem('userToken')!,
        },
      }
    );
  }
}
