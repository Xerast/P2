import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateCommentsService {

  private baseUrl: string = "http://localhost:8080/foodgram/posts";
  headers  = new HttpHeaders().set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')

  constructor(private http: HttpClient) { }

  addComment(comment: Comment): Observable<any>{
    return this.http.post(
      this.baseUrl,
      JSON.stringify(comment),
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
