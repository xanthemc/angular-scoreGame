import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}
  user: User[] = [];
  // userScore: any = [];
  // playerData: any = [];

  private scores = new BehaviorSubject<number[]>([-1, -1, -1, -1, -1, -1]);
  currentScores = this.scores.asObservable();

  updateScores(scores: number[]) {
    this.scores.next(scores);
    // console.log(`service --scores: ` + this.scores);
  }

  getSingleUser(user_id: string) {
    return this.http.get<string>(`https://reqres.in/api/users/${user_id}`);
  }
}
