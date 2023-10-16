import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';
import { UserInfo } from '../models/user-info';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isUserLoggedIn: BehaviorSubject <boolean> = new BehaviorSubject(false);
  constructor(private _Httpclient: HttpClient, private _Router:Router) {}

  register(registerForm: UserInfo): Observable<any> {
    return this._Httpclient.post(`${environment.baseUrl}auth/signup`, registerForm);
  }

  login(logInForm: UserInfo): Observable<any> {
    return this._Httpclient.post(`${environment.baseUrl}auth/signin`, logInForm);
  }
  forgotPasswords(email: string): Observable<any> {
    return this._Httpclient.post(`${environment.baseUrl}auth/forgotPasswords`, {email});
  }
  verifyResetCode(resetCode: string): Observable<any> {
    return this._Httpclient.post(`${environment.baseUrl}auth/verifyResetCode`, {resetCode});
  }
  resetPassword(logInForm: UserInfo): Observable<any> {
    return this._Httpclient.put(`${environment.baseUrl}auth/resetPassword`, logInForm);
  }


  logOut(){
    localStorage.removeItem("userToken")
    this.isUserLoggedIn.next(false)
    this._Router.navigate(['login'])
  }
}
