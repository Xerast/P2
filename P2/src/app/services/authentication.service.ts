import { Injectable } from '@angular/core';
import { SignInData } from '../model/signInData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated = false;

  private baseUrl: string = "http://localhost:8080/foodgram/login";

  headers = new HttpHeaders().set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')

  constructor(private http: HttpClient) { }

  authenticate(signInData: SignInData): Observable<any>{
    console.log("inside the authenticate service");
      return this.http.post(
        this.baseUrl,
        JSON.stringify(signInData),
          {
            headers: this.headers,
            withCredentials: true
          }
        ).pipe(
          map(response => response),
          catchError(err => err)
        )
      
    }

  
}

