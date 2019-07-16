import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule} from '@angular/forms';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginPageComponent, ForgetPasswordComponent, SignupComponent, PasswordResetComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class LoginModule { }
