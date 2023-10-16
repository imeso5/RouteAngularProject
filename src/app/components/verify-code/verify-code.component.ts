import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css'],
})
export class VerifyCodeComponent implements OnInit {
  resetCodeForm!: FormGroup;
  constructor(private _AuthService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.resetCodeForm = new FormGroup({
      code: new FormControl(''),
    });
  }

  codeverify() {
    this._AuthService
      .verifyResetCode(this.resetCodeForm.controls['code'].value).subscribe({
        next: (res) => {
          console.log(res);

          this.router.navigate(['resetPassword']);
        },
      });
  }
}
