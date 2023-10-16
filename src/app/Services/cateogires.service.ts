import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CateogiresService {

  constructor(private _HttpClient:HttpClient) { }
///api/v1/categories/6407ea3d5bbc6e43516931df/subcategories
  getAllcategories() :Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }

  getAllSubCategoriesOnCategory(id:string):Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories/'+id+'/subcategories')
  }
}
