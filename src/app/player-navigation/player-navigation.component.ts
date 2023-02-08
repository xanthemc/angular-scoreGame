import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-player-navigation',
  templateUrl: './player-navigation.component.html',
  styleUrls: ['./player-navigation.component.css'],
})
export class PlayerNavigationComponent {
  // scoreWin: any;

  showComponentA: boolean | undefined;
  showComponentB: boolean | undefined;
  showResult: boolean | undefined;
  btnPlayerBValid: boolean | undefined;
  btnResultValid: boolean | undefined;
  private previousScores: any[] = [-1, -1, -1, -1, -1, -1];

  constructor(private http: HttpClient, private gameService: GameService) {}

  results: boolean | undefined;

  ngOnInit() {
    this.gameService.currentScores.subscribe((scores) => {
      //compare new scores with old scores if changes made
      // let old_scores = [-1, -1, -1, -1, -1, -1];
      console.log(`old scores: ${this.previousScores}`);
      const areAllScoresEqualToMinusOne = scores.every((score) => score !== -1);
      if (areAllScoresEqualToMinusOne) {
        console.log('all scores are nort equal to -1');
        this.btnResultValid = true;
        // this.scoreWin = this.compareCostsWithIndex(scores);
        // this.previousScores = scores;
      }
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

  compareCostsWithIndex(costs: any[]) {
    const result = [];
    for (let i = 0; i < costs.length / 2; i++) {
      const a = costs[i];
      const b = costs[i + costs.length / 2];
      let largerValue, largerIndex;
      if (a > b) {
        largerValue = a;
        largerIndex = i;
      } else {
        largerValue = b;
        largerIndex = i + costs.length / 2;
      }
      result.push({
        index: largerIndex,
        value: largerValue,
      });
    }
    console.log(`${JSON.stringify(result)}`);
    return result;
  }

  // const costs = [2, 4, 4, 8, 30, 20];
  // console.log(compareCostsWithIndex(costs));
  // Output: [{ index: 3, value: 8 }, { index: 4, value: 30 }, { index: 5, value: 20 }]
}
