import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl: string = "http://localhost:8080/foodgram/posts";
  headers = new HttpHeaders().set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.baseUrl)
      .pipe(
        map(res => res as Post[]),
        catchError(err => err)
      )
  };

  addPost(post: Post): Observable<any>{
    return this.http.post(
      this.baseUrl,
      JSON.stringify(post),
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
