import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const users = [
    {id: 1, firstname: 'jan', lastname: 'de man', email: 'jan@ucll.be', sex: 'Male', status: 'Online', age: 18, password: 't'},
    {id: 2, firstname: 'an', lastname: 'de vrouw', email: 'an@ucll.be', sex: 'Female', status: 'Online', age: 18, password: 't'}
    ];
    return {users};
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
