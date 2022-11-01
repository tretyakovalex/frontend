import { POSTS_URL } from './../shared/constants/urls';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_posts } from 'src/data';
import { Post } from '../shared/models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(POSTS_URL);
  }
}
