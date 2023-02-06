import { Component, EventEmitter, Output } from '@angular/core';

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

  item = 'Television';

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
