import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { USERS } from '../mock-users';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users',
 template: `
    <h1>{{title}}</h1>
    <ul>
      <li *ngFor="let user of users" (click)="onSelect(user)">
        <span>{{user.firstname}}</span> {{user.lastname}} {{user.status}}
      </li>
    </ul>
    <div *ngIf="selectedUser">
      <h2>{{selectedUser.firstname | titlecase}}'s details!</h2>
      <div>
        <label>Firstname: </label>
        <input [(ngModel)]="selectedUser.firstname" placeholder="firstname"/>
      </div>
      <div>
        <label>Lastname: </label>
        <input [(ngModel)]="selectedUser.lastname" placeholder="lastname"/>
      </div>
      <div>
        <label>Email: </label>
        <input [(ngModel)]="selectedUser.email" placeholder="email"/>
      </div>
      <div>
        <label>Sex: </label>
        <input [(ngModel)]="selectedUser.sex" placeholder="sex"/>
      </div>
      <div>
        <label>Password: </label>
        <input [(ngModel)]="selectedUser.password" placeholder="password"/>
      </div>
      <div>
        <label>status: </label>
        <input [(ngModel)]="selectedUser.status" placeholder="status"/>
      </div>
    </div>
  `,
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  title = 'Users';
  users: User[];
  selectedUser: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  constructor(private userService: UserService) { }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
