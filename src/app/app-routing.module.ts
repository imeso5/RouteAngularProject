import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { AuthGuard } from './Gards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent, canActivate:[AuthGuard]},
  {path:'cart', component:CartComponent, canActivate:[AuthGuard]},
  {path:'allorders', component:AllOrdersComponent, canActivate:[AuthGuard]},
  {path:'brands', component:BrandsComponent, canActivate:[AuthGuard]},
  {path:'categories', component:CategoriesComponent, canActivate:[AuthGuard]},
  {path:'wishlist', component:WishListComponent, canActivate:[AuthGuard]},
  {path:'checkout/:cartId', component:CheckoutComponent, canActivate:[AuthGuard]},
  {path:'products', component:ProductsComponent, canActivate:[AuthGuard]},
  {path:'forgetPassword', component:ForgetPasswordComponent},
  {path:'varifyCode', component:VerifyCodeComponent},
  {path:'resetPassword', component:ResetPasswordComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
