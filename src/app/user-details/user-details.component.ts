import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userId: number;
  userData: any;
  sub: Subscription;
  todos: any[];

  constructor(private ar: ActivatedRoute, private userService: UserService) { }
  ngOnInit() {
    this.ar.params.subscribe(async data => {
      this.userId = data["id"];
      this.sub = this.userService.getUserDetails(this.userId).subscribe(userData => this.userData = userData);
      this.userService.getTodosByUserId(this.userId).then( taskData => this.todos = taskData);
    });
  }

}
