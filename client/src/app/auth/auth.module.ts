import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxLoadingModule } from 'ngx-loading';

import { AuthService } from './services/auth.service';
import { JwtService } from '../shared/services/jwt/jwt.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NgxLoadingModule
  ],
  providers: [
    AuthService,
    JwtService
  ]
})
export class AuthModule { }
