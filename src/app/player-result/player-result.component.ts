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
  winningIndex: any;
  player1Indexes = [0, 1, 2];
  player2Indexes = [3, 4, 5];
  player1Wins = 0;
  player2Wins = 0;
  finalWinner: string = '';
  p1_draw1: boolean = false;
  p1_draw2: boolean = false;
  p1_draw3: boolean = false;
  p2_draw4: boolean = false;
  p2_draw5: boolean = false;
  p2_draw6: boolean = false;

  ngOnInit() {
    this.gameService.currentScores.subscribe((scores) => {
      this.scoreWin = this.compareScores(scores);
      this.winningIndex = this.scoreWin.map((x: any) => x.index);
      this.getWinner(
        this.player1Indexes,
        this.player2Indexes,
        this.winningIndex
      );

      // console.log(`winning : ${JSON.stringify(this.finalWinner)}`);
    });
  }
  compareScores(costs: any[]) {
    const result = [];
    for (let i = 0; i < costs.length / 2; i++) {
      let a = parseInt(costs[i]);
      let b = parseInt(costs[i + costs.length / 2]);
      let largerValue, largerIndex, playerId;
      if (a > b) {
        largerValue = a;
        largerIndex = i;
        playerId = 1;
      } else {
        largerValue = b;
        largerIndex = i + costs.length / 2;
        playerId = 2;
      }
      console.log(`a>b: ${a > b}`);
      console.log(`a: ${a}`);
      console.log(`b: ${b}`);

      // if(largerIndex==i)
      // console.log(`who wins: ${largerIndex}`);

      result.push({
        index: largerIndex,
        value: largerValue,
        player_id: playerId,
      });
    }
    console.log(`${JSON.stringify(result)}`);
    return result;
  }
  getWinner(
    player1Indexes: any[],
    player2Indexes: any[],
    winningIndexes: any[]
  ) {
    for (let i = 0; i < winningIndexes.length; i++) {
      console.log(`winningIndexes: ${winningIndexes}`);
      if (winningIndexes[i] <= 2) {
        this.player1Wins++;
        if (i == 0) {
          this.p1_draw1 = true;
        }
        if (i == 1) {
          this.p1_draw2 = true;
        }
        if (i == 2) {
          this.p1_draw3 = true;
        }
      } else {
        this.player2Wins++;
        if (i == 0) {
          this.p2_draw4 = true;
        }
        if (i == 1) {
          this.p2_draw5 = true;
        }
        if (i == 2) {
          this.p2_draw6 = true;
        }
      }
    }
    // winningIndexes.forEach((winningIndex) => {
    //   if (player1Indexes.includes(winningIndex)) {
    //     this.player1Wins++;
    //   } else if (player2Indexes.includes(winningIndex)) {
    //     this.player2Wins++;
    //   }
    // });

    if (this.player1Wins > this.player2Wins) {
      this.finalWinner = 'Player 1 wins!';
      console.log('Player 1 wins!');
    } else if (this.player2Wins > this.player1Wins) {
      this.finalWinner = 'Player 2 wins!';
      console.log('Player 2 wins!');
    } else {
      this.finalWinner = "It's a tie!";
      console.log("It's a tie!");
    }
  }
}
