import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  data: any;
  searchResult: any;

  constructor(private route: Router, private client: HttpClient) {}

  isObject(val: any): boolean {
    return val[0] === undefined;
  }

  ngOnInit(): void {
    this.searchResult = this.route.url.slice(13);

    console.log(this.searchResult);

    this.client
      .get(`http://localhost:3000/api/leveling/search/${this.searchResult}`)
      .subscribe(data => {
        this.data = data;

        console.log(this.data);
      });
  }
}
