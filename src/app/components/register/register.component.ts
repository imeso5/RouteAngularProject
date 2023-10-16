import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserInfo } from 'src/app/models/user-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private authService:AuthService, private router:Router){

}


registerForm:FormGroup = new FormGroup({
  name: new FormControl('', [Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
    Validators.pattern(/^[A-Z][a-zA-Z0-9]+$/)]),
  email: new FormControl('', [Validators.email,Validators.required]),
  password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
  rePassword: new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
  phone: new FormControl('',[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
})



register(registerForm:FormGroup){
const user: UserInfo = {
  name: this.registerForm.controls['name'].value,
  email: this.registerForm.controls['email'].value,
  password: this.registerForm.controls['password'].value,
  rePassword: this.registerForm.controls['rePassword'].value,
  phone:this.registerForm.controls['phone'].value
}
this.authService.register(user).subscribe({
  next:(any)=>[this.router.navigate(["login"])]
});

}

matching(password:string, rePassword:string){
if(password==rePassword)
{return true;}
else
{return false;}
}
}
