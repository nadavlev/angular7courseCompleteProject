import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client: HttpClient) { }

  getAllUsers() {
    return this.client.get<any[]>(USERS_URL);
  }

  getUserDetails(id: number) {
    return this.client.get<any>(USERS_URL + '/' + id);
  }

  getTodosByUserId(userId: number) {
    return new Promise<any[]>(resolve => {
      this.client.get<any[]>(TODOS_URL).subscribe( data => {
        resolve(data.filter(todo => todo.userId == userId));
      });
    });
  }

}
