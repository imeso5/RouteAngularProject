import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private _HttpClient: HttpClient) { }


  addToWishList(productId: string): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/wishlist', {productId},
    {
      headers:
      {
        token:localStorage.getItem('userToken')!
      }
    })
  }

  removeFromWishList(productId: string): Observable<any> {
    return this._HttpClient.delete('https://ecommerce.routemisr.com/api/v1/wishlist/'+ productId,
    {
      headers:
      {
        token:localStorage.getItem('userToken')!
      }
    })
  }

  getLoggedUserWishList(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist/',
    {
      headers:
      {
        token:localStorage.getItem('userToken')!
      }
    })
  }
}

