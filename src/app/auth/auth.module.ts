import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../core/interceptors/jwt.interceptor';
import { FormsModule } from '@angular/forms'; 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router'
@NgModule({
providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }
],

imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AuthRoutingModule,
    LoginComponent,        
    RegisterComponent     
  ]
})
export class AuthModule { }
