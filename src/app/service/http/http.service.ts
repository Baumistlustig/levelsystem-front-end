import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  post(body: object, url: string) {
    return this.http.post(url, body)
  }

  getPosts(url: string, body: object) {
    return this.http.get(url, body);
  }
}
