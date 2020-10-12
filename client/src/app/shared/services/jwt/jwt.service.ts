import { Injectable } from '@angular/core';

import { User } from '../../../shared/models/user/user.model';

@Injectable()
export class JwtService {

  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
  	window.localStorage.clear();
  }

  saveUser(user: String){
  	window.localStorage['user'] = user;
  }

  checkUser(): boolean {
    return window.localStorage.getItem('user') ? true : false;
  }

  getUser(): User {
    return window.localStorage.getItem('user') ?  JSON.parse(decodeURIComponent(escape(window.atob( localStorage.getItem('user') )))): null;
  }

  checkThirdParty(){
    let user = this.getUser();
     return (user.third_parties[0]) ? true : false;  
   }

 

}
