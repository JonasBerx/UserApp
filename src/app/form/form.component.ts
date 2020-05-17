import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {User} from '../user';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  registerForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    sex: new FormControl(''),
    age: new FormControl(''),
    password: new FormControl('')
  });

  users: User[];

  constructor( private userService: UserService) {}


  onSubmit(userdata){
    this.userService.createUser(userdata).subscribe(user => {
      this.users.push(user); });
    this.registerForm.reset();
  }
}
