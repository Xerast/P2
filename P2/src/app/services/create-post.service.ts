import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {
  private baseUrl: string = "http://localhost:8080/foodgram/login";
  headers = new HttpHeaders().set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')

  constructor(private http: HttpClient) { }
}
