import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { GameService } from '../game.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  @Input() user_id!: number;
  constructor(private http: HttpClient, private gameService: GameService) {}

  user!: User;

  ngOnInit() {
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
    });
  }
}
