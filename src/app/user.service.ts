import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Observable, of } from 'rxjs';
import {mainDiagnosticsForTest} from '@angular/compiler-cli/src/main';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private router: Router, private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return of (USERS);
  }

  createUser(userdata) {
    const user = new User(userdata.firstname, userdata.lastname, userdata.email, userdata.sex, userdata.age, 'Offline', userdata.password);
    USERS.push(user);
    this.router.navigateByUrl('/users');
  }
}
