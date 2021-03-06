import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  constructor(private userService:UserService) {}

  onSetToActive(id: number) {
    this.userService.setActive(id);
  }
}
