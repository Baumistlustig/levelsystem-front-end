import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {

  constructor(private route:Router, private client:HttpClient) {  }

  ngOnInit(): void {  }

  searchResult : String = '';

  search(){
    if (this.searchResult === '') {
      return;
    }
    console.log(this.searchResult)

    this.route.navigate(['/user']);
  }
}
