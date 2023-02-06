import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}
  user: User[] = [];

  getSingleUser(user_id: string) {
    return this.http.get<string>(`https://reqres.in/api/users/${user_id}`);
  }
}
