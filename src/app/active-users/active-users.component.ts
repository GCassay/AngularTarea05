import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  constructor(private userService:UserService) {}

  onSetToInactive(id: number) {
    this.userService.setInactive(id);
  }
}
