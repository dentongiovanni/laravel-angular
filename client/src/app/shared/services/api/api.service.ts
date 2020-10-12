import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map,first,catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { JwtService } from '../jwt/jwt.service';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private jwtService: JwtService,
  ) {}

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    if (this.jwtService.getToken()) {
      headersConfig['Authorization'] = `${this.jwtService.getToken()}`;
    }
    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: any) {
     return Observable.throw(error.json());
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return  this.http.get(`${environment.api_url}${path}`, { headers: this.setHeaders(), params })
            .pipe(
                map((res: Response) => res.json()),
                catchError(err =>(this.formatErrors(err)))
            );

  }

  put(path: string, body: Object = {}): Observable<any> {
 
  return  this.http.put(`${environment.api_url}${path}`,
          JSON.stringify(body),
          { headers: this.setHeaders() } )
            .pipe(
              map((res: Response) => res.json()),
              catchError(err =>(this.formatErrors(err)))
          );
          
  }

  post(path: string, body: Object = {}): Observable<any> {
   
    return  this.http.post(`${environment.api_url}${path}`,
            JSON.stringify(body),
            { headers: this.setHeaders() } )
              .pipe(
                map((res: Response) => res.json()),
                catchError(err =>(this.formatErrors(err)))
            );
  
  }

  delete(path): Observable<any> {
  
    return  this.http.delete(`${environment.api_url}${path}`,
            { headers: this.setHeaders() } )
             .pipe(
              map((res: Response) => res.json()),
              catchError(err =>(this.formatErrors(err)))
           );
  }
}
