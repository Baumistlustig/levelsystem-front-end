import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  data:any;

  constructor(private client: HttpClient) {  }

  ngOnInit(): void {
    this.client.get('http://localhost:8090/api/leaderboard')
      .subscribe(data => {
        this.data = data;
        if (data === { "error": "Not enough users in database!" }) {
          throw data;
        }
        console.log(data);
      });
  }
}
