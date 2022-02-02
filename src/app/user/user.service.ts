import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, throwError } from 'rxjs';
import { map  } from 'rxjs/operators';
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

  public postsWithUser$: Observable<Post[]>=forkJoin(this.posts$,this.users$).pipe(map(([posts,users])=>
     posts.map(post=>
        ({
         ...post,
         userName:users.find(user=>post.userId===user.id)?.name
       }) as Post
     )
  ))
  
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