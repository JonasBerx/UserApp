import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { USERS } from '../mock-users';
import {UserService} from '../user.service';
import {timer} from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users',
 template: `
    <h1>{{title}}</h1>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Firstname</th>
          <th scope="col">Lastname</th>
          <th scope="col">Email</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users; index as i" (click)="onSelect(user)">
          <th>{{ i + 1 }}</th>
          <td>{{user.firstname}}</td>
          <td>{{user.lastname}}</td>
          <td>{{user.email}}</td>
          <td>Status:{{user.status}}</td>
        </tr>
      </tbody>
    </table>
    <div *ngIf="user">
      <h2>{{user.firstname | titlecase}}'s Status!</h2>
      <div>
        <label>Status: </label>
        <input [(ngModel)]="user.status" placeholder="status" (blur)="update(user)" />
      </div>
    </div>
  `,
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  title = 'Users';
  users: User[];
  user: User;
  onSelect(user: User): void {
    this.user = user;
  }

  constructor(private userService: UserService) {
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  update(user: User): void {
    this.userService.updateUser(user);
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
