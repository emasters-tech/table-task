import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  public dataSource: any;
  public displayedColumns: string[] = ['img', 'name', 'email', 'city', 'phone'];
  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.dataSource = users;
    });
  }

  public addPost(): void {
    this.dialog.open(PostDialogComponent, {
      width: '250px',
    });
  }
}
