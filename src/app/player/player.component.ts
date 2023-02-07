import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router'; //use in routing different player
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  @Input() user_id!: number;
  @Input() item = '';
  @Output() itemChange = new EventEmitter();
  //two way binding for input
  private _draw1: any;

  private _draw2: any;
  private _draw3: any;
  playerData: any;
  scores_local: number[] = [];

  // inputValue!: string;
  // isFocused: boolean = false;
  subscription!: Subscription;

  constructor(
    private http: HttpClient,
    private gameService: GameService,
    private route: ActivatedRoute
  ) {}

  user!: User;

  ngOnInit() {
    this.subscription = this.gameService.currentScores.subscribe((scores) => {
      console.log(`scores user ${this.user_id}: ${scores}`);
      this.scores_local = scores;
      console.log(`scores: ` + this.scores_local);
    });

    this.gameService.getSingleUser(`${this.user_id}`).subscribe((data: any) => {
      let user_data = data;
      console.log(JSON.stringify(user_data));
      this.user = {
        id: user_data['data']['id'],
        email: user_data['data']['email'],
        first_name: user_data['data']['first_name'],
        last_name: user_data['data']['last_name'],
        avatar: user_data['data']['avatar'],
      };
      // this.user = user_data.find(this.user.id === userIdFromRoute);
    });
  }

  get draw1() {
    console.log('AppComponent.getter', this._draw1);
    return this._draw1;
  }

  get draw2() {
    console.log('AppComponent.getter2', this._draw2);
    return this._draw2;
  }
  get draw3() {
    console.log('AppComponent.getter3', this._draw3);
    return this._draw3;
  }

  set draw1(value: number) {
    console.log('AppComponent.setter', value);
    this._draw1 = value;
    // let idx = this.user_id - 1;
    let idx;
    if (this.user_id == 1) {
      idx = 0;
    } else {
      idx = 3;
    }
    this.updateScoreArray(idx, value);
  }
  set draw2(value2: number) {
    console.log('AppComponent.setter2', value2);
    this._draw2 = value2;
    let idx2;
    // let idx2 = this.user_id;
    if (this.user_id == 1) {
      idx2 = 1;
    } else {
      idx2 = 4;
    }
    this.updateScoreArray(idx2, value2);
  }
  set draw3(value3: number) {
    console.log('AppComponent.setter3', value3);
    this._draw3 = value3;
    let idx3;
    // let idx3 = this.user_id + 1;
    if (this.user_id == 1) {
      idx3 = 2;
    } else {
      idx3 = 5;
    }
    console.log(`idx3; ${idx3}`);
    this.updateScoreArray(idx3, value3);
  }

  updateScoreArray(draw_index: number, value: number) {
    this.scores_local[draw_index] = value;
    this.gameService.updateScores(this.scores_local);
    console.log(`scores: ` + this.scores_local);
  }

  ngOnDestroy() {}

  onInputChange() {}
}
