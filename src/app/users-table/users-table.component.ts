import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { Post } from '../shared/post.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  constructor(private userService: UserService, public dialog: MatDialog) {}
  
  public users$ = this.userService.users$;

  public displayedColumns: string[] = ['img','userName', 'title', 'body'];

  public postsWithUser$ = this.userService.postsWithUser$;

  ngOnInit(): void {}

  public addPost(): void {
    this.dialog.open(PostDialogComponent, {
      width: '500px',
    });
  }

  clickedRows = new Set<Post>();
}
