import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { JwtService } from '../shared/services/jwt/jwt.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private auth: AuthService, 
              private router: Router,
              private jwtservice: JwtService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.jwtservice.checkUser() && this.jwtservice.checkThirdParty() == false) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.jwtservice.checkUser() && this.jwtservice.checkThirdParty() == false) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}
