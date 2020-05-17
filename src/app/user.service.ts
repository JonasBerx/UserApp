import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private router: Router , private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  updateUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

  createUser(userdata): Observable<User> {
    const user = new User(userdata.firstname, userdata.lastname, userdata.email, userdata.sex, userdata.age, 'Offline', userdata.password);
    this.router.navigateByUrl('/users');
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);

  }

}
