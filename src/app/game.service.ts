import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}
  user: User[] = [];
  userScore: any = [];

  addUserScore(score: any) {
    return this.userScore.push(score);
  }
  getUserScore(user_id: any) {
    return this.user.find((x) => x.id == user_id);

    // return this.userScore;
  }
  getSingleUser(user_id: string) {
    return this.http.get<string>(`https://reqres.in/api/users/${user_id}`);
  }
}
