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
  showComponentB: boolean | undefined;
  showResult: boolean | undefined;
  btnPlayerBValid: boolean | undefined;
  btnResultValid: boolean | undefined;
  private previousScores: any[] = [-1, -1, -1, -1, -1, -1];

  // playerData = ['draw1', 'draw2', 'draw3'];
  //   item = 'Television';
  //  playerData = this.gameService.getData(1) || '';

  constructor(private http: HttpClient, private gameService: GameService) {}

  results: boolean | undefined;
  // displayResult() {
  //   this.btnResultValid = true;

  // }

  ngOnInit() {
    this.gameService.currentScores.subscribe((scores) => {
      //compare new scores with old scores if changes made
      // let old_scores = [-1, -1, -1, -1, -1, -1];
      console.log(`old scores: ${this.previousScores}`);
      const areAllScoresEqualToMinusOne = scores.every((score) => score !== -1);
      if (areAllScoresEqualToMinusOne) {
        console.log('all scores are nort equal to -1');
        this.btnResultValid = true;
        // this.previousScores = scores;
      }
      /*   const areScoresEqual = this.previousScores.every(
        (previousScore, index) => {
          return (
            JSON.stringify(previousScore) === JSON.stringify(scores[index])
          );
        }
      );
      if (!areScoresEqual) {
        console.log('scores have changed');
        this.btnResultValid = true;

        // this.previousScores = scores;
      } */
      //Check if every scores changes
      /*   let checker = (arr: any[], target: any[]) =>
        target.every((v) => {
          arr.includes(v);
        });

      let areScoresEqual = checker(this.previousScores, scores);
      if (areScoresEqual) {
        console.log('score equal' + areScoresEqual);
      } */

      // false
      /*   if (JSON.stringify(this.previousScores) !== JSON.stringify(scores)) {
        console.log('scores have changed');
        this.btnResultValid = true;

        // this.previousScores = scores;
      } */
      /* if (scores ==  ) console.log('The arrays have the same elements.');
      else console.log('The arrays have different elements.'); */
      //show button and allow display both player
    });
  }
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
  displayResult() {
    console.log(`show true: ${this.showComponentB}`);
    this.showResult = true;
    this.showComponentB = false;
  }
}
