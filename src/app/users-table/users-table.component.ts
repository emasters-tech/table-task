import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs/operators';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { Post } from '../shared/post.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit  {
  constructor(private userService: UserService, public dialog: MatDialog) {}
  public dataSource ;
  public users$ = this.userService.users$;

  public displayedColumns: string[] = ['img','userName', 'title', 'body'];
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit(): void {
    this.userService.postsWithAdd$.pipe(take(1)).subscribe(data=>{
      this.dataSource=new MatTableDataSource<Post>(data);
    
      this.dataSource.paginator = this.paginator;

    })
  }


  public addPost(): void {
    this.dialog.open(PostDialogComponent, {
      width: '500px',
    });
  }

}
