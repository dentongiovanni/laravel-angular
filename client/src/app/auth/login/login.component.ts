import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loading = false;
  f: FormGroup;
  errorCredentials = false;
  params: any;
  user_status: any;
  email: string;
  password: string;
  public lang_locale_param:any;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private cookieService:CookieService) {}


  ngOnInit() {
      this.route.queryParams.subscribe(params =>{
        this.user_status = params['user_status'];
     });

    this.email = this.cookieService.get('email') ? atob(this.cookieService.get('email')) : null;
    this.password = this.cookieService.get('hash') ? atob(this.cookieService.get('hash')) : null;    

    this.f = this.formBuilder.group({
      email: [this.email, [Validators.required, Validators.email]],
      password: [this.password, [Validators.required]],
      remember_me:[true]
    });
 
  }

  onSubmit() {
    this.loading = true;
    let data = this.f.value;
    this.authService.login(data).subscribe(
      (resp) => {
        this.loading = false;
        if(this.f.value.remember_me){
          this.cookieService.put('email', btoa(data.email));
          this.cookieService.put('hash', btoa(data.password));
        }else{
          this.cookieService.remove('email');
          this.cookieService.remove('hash');
        }

        let third_party = resp['user']['roles'][0]['name'];
        if(third_party == 'third-party'){
         // window.location.href="/client";
          this.router.navigate(['/client']);
        }else{
          this.router.navigate(['/admin']);
        }
      },
      (errorResponse: HttpErrorResponse) => {
        this.loading = false;
          if (errorResponse.status === 401) {
          this.errorCredentials = true;
        }
      }
    );
  }

}

