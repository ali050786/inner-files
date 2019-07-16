import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { SignupComponent } from './login/signup/signup.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { PasswordResetComponent } from './login/password-reset/password-reset.component';
import { DashboardViewComponent } from './dashboard/dashboard-view/dashboard-view.component';
import { TemplateViewComponent } from './dashboard/template-view/template-view.component';



const accountRoutes : Routes = [
        {path: 'home', component: DashboardViewComponent},
        {path: 'templates', component: TemplateViewComponent}
]

const buildResumeRoutes : Routes = [
     
]


const routes : Routes = [
  
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'forgot-password', component: ForgetPasswordComponent},
  {path: 'password-reset', component: PasswordResetComponent},
  {path: 'account', children: accountRoutes },
  {path: 'build-resume', children: buildResumeRoutes },
  {path: '', redirectTo: '/home' , pathMatch: 'full'}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes),
            
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
