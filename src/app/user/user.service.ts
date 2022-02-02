import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from './user.model';
import { environment } from 'src/environments/environment';
import { Post } from '../shared/post.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public users$: Observable<User[]> =this.httpClient.get<User[]>(`${environment.apiBaseUrl}/users`);

  public posts$: Observable<Post[]> =this.httpClient.get<Post[]>( `${environment.apiBaseUrl}/posts`);
  
  public submitPost(
    post: Post
  ): Observable<Post> {
    return this.httpClient
      .post<Post>(
        `${environment.apiBaseUrl}/posts`,
        post
      )
  }
}