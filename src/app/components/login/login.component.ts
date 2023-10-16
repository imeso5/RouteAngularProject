import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInfo } from 'src/app/models/user-info';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _AuthService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        ),
      ]),
    });
  }

  signin(logInForm: FormGroup) {
    const user: UserInfo = {
      email: this.logInForm.controls['email'].value,
      password: this.logInForm.controls['password'].value,
    };
    this._AuthService.login(user).subscribe({
      next: (res) => {
        this._AuthService.isUserLoggedIn.next(true);
        localStorage.setItem('userToken', res.token);
        this.router.navigate(['home']);
        var decoded = jwt_decode(res.token) as { id: string };
        console.log(decoded.id);
        localStorage.setItem('userId', decoded!.id);
      },
    });
  }
  logInForm!: FormGroup;
}
