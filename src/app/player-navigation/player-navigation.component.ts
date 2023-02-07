import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-player-navigation',
  templateUrl: './player-navigation.component.html',
  styleUrls: ['./player-navigation.component.css'],
})
export class PlayerNavigationComponent {
  showComponentA: boolean | undefined;
  btnPlayerBValid: boolean | undefined;
  btnResultValid: boolean | undefined;
  showComponentB: boolean | undefined;
  // playerData = ['draw1', 'draw2', 'draw3'];
  //   item = 'Television';
  //  playerData = this.gameService.getData(1) || '';

  constructor(private http: HttpClient, private gameService: GameService) {}

  results: boolean | undefined;
  displayPlayerA() {
    console.log(`show true: ${this.showComponentA}`);
    this.showComponentA = true;
    this.showComponentB = false;
  }
  displayPlayerB() {
    console.log(`show true: ${this.showComponentB}`);
    this.showComponentB = true;
    this.showComponentA = false;
  }
}
