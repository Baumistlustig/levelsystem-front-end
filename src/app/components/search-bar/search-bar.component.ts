import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserComponent} from "../user/user.component";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {

  constructor(
    private route:Router,
  ) {  }

  ngOnInit(): void {
  }

  searchResult: string = '';

  search(){
    if (this.searchResult === '') {
      return;
    }

    this.route.navigate([`/user/${this.searchResult}`]);

  }
}
