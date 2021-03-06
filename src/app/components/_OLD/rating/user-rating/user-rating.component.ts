import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../account/models/user';
import { UserService } from '../../account/services/user.service';

@Component({
  selector: 'app-user-rating',
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.css'],
})
export class UserRatingComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'profit', 'riskProfile', 'robotsQuantity'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  isLoading = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(users => {
      this.dataSource.data = users;
      this.isLoading = false;
    });
  }
}
