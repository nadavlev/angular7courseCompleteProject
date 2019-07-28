import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  sub: Subscription;
  allUsers: any[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.sub = this.userService.getAllUsers().subscribe(data => {
      this.allUsers = data;
    });
  }

}
