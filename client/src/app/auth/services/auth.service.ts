import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

import { User } from '../../shared/models/user/user.model';
import { JwtService } from '../../shared/services/jwt/jwt.service';
import { environment } from './../../../environments/environment';

@Injectable()
export class AuthService {
   subject: Subject<any> = new Subject<any>();
   observable: Observable<any> = this.subject.asObservable();
  constructor(private http: HttpClient, 
              private router: Router,
              private jwtservice: JwtService) { }

  changeMessage(message: any): void{
     this.subject.next(message);
  }

  check(): boolean {
    return localStorage.getItem('user') ? true : false;
  }


  login(credentials: { email: string, password: string }): Observable<any> {
   
    return this.http.post<any>(`${environment.api_url}/auth/login`, credentials)
      .pipe(map(data => {
        this.jwtservice.saveToken(data.token);
        this.jwtservice.saveUser(window.btoa(unescape(encodeURIComponent( JSON.stringify(data.user) ))));
      }),catchError(err =>(this.formatErrors(err))));
  }

  logout(): void {
    const params = {token:this.jwtservice.getToken()};
    this.http.post(`${environment.api_url}/auth/logout`,params).subscribe(resp => {
      this.jwtservice.destroyToken();
      this.router.navigate(['login']);
    }),(errorResponse: HttpErrorResponse) => {
         console.log(errorResponse);
       }
  }

  getUser(): User {
    return localStorage.getItem('user') ? JSON.parse(window.atob(localStorage.getItem('user'))) : null;
  }

  setUser(): Promise<boolean> {
    return this.http.get<any>(`${environment.api_url}/auth/me`).toPromise()
      .then(data => {
        if (data.user) {
           this.jwtservice.saveUser(btoa(JSON.stringify(data.user)));
          return true;
        }
        return false;
      });
  }
 
 private formatErrors(error: any) {
    return Observable.throw(error.json());
 }

}
