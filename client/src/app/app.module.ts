import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CookieModule } from 'ngx-cookie';
import { NgxLoadingModule } from 'ngx-loading';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CookieModule.forRoot(),
    NgxLoadingModule,
    AuthModule,
    AdminModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
