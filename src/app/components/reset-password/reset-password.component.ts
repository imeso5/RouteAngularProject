import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserInfo } from 'src/app/models/user-info';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;

  constructor(private _AuthService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      newPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        ),
      ]),
    });
  }

  submitPassword() {
    debugger
    const userInfo: UserInfo = {
      email: this.resetPasswordForm.controls['email'].value,
      newPassword: this.resetPasswordForm.controls['newPassword'].value,
    };
    this._AuthService.resetPassword(userInfo).subscribe({
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
}
