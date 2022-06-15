import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data:any;

  constructor(private searchbar:SearchBarComponent, private client:HttpClient) { }

  ngOnInit(): void {
    this.client.get(`http://localhost:8090/api/search/${this.searchbar.searchResult}`)
      .subscribe(data => {
        this.data = data;
        if (data === {"error": "no_user_found"}) {
          throw data;
        }
      })
    ;
  }
}
