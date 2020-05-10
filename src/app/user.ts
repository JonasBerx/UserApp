import {FormControl} from '@angular/forms';

export class User {
  constructor(firstname: string, lastname: string, email: string, sex: string, age: number, status: string, password: string ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.status = status;
    this.age = age;
    this.status = status;
    this.password = password;
  }

  firstname: string;
  lastname: string;
  email: string;
  sex: string;
  age: number;
  password: string;
  status: string;

  toString(): string {
    return this.firstname + ' ' + this.lastname + ' password: ' + this.password
  }
}
