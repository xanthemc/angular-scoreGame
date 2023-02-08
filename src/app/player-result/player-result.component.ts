import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-player-result',
  templateUrl: './player-result.component.html',
  styleUrls: ['./player-result.component.css'],
})
export class PlayerResultComponent {
  constructor(private http: HttpClient, private gameService: GameService) {}
  scoreWin: any;
  badgeText = 'W';
  isWinning = true;

  ngOnInit() {
    this.gameService.currentScores.subscribe((scores) => {
      this.scoreWin = this.compareCostsWithIndex(scores);
      console.log(`Score win: ${this.scoreWin}`);
    });
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
}
