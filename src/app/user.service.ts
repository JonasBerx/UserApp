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

  private usersUrl = 'http://localhost:8080/Controller?action=GetUsers';
  private updateUserUrl = 'http://localhost:8080/Controller?action=UpdateUser&id=';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private router: Router , private http: HttpClient) {
  }
  users: object;

  getJsonUsers(): Observable<any> {

    return this.http.get<string[]>(this.usersUrl);
  }

  updateUser(user: User): Observable<User> {
    this.updateUserUrl = 'http://localhost:8080/Controller?action=UpdateUser&id=';
    this.updateUserUrl += user.email;
    console.log(this.updateUserUrl);
    console.log(user);
    return this.http.post<User>(this.updateUserUrl, user.status, this.httpOptions);
  }

  createUser(userdata): Observable<User> {
    const user = new User(userdata.firstname, userdata.lastname, userdata.email, userdata.sex, userdata.age, 'Offline', userdata.password);
    this.router.navigateByUrl('/users');
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);

  }

}
