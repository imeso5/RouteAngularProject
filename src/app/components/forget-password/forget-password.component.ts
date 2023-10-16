import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm!: FormGroup;
  constructor(private _AuthService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.forgetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
    });
  }

  sendCode() {
    this._AuthService
      .forgotPasswords(this.forgetPasswordForm.controls['email'].value)
      .subscribe({
        next: (res) => {
          this.router.navigate(['varifyCode']);
        },
      });
  }
}
