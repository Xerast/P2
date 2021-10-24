import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {
  private baseUrl: string = "http://localhost:8080/foodgram/user";
  headers = new HttpHeaders().set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<any>{
    return this.http.post(
      this.baseUrl,
      JSON.stringify(user),
      {
        headers: this.headers,
        withCredentials: true
      }
    ).pipe(
      map(res => res),
      catchError(err => err)
    )
  }
  
}
