import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { HttpClient } from "@angular/common/http";
import { DataBusService } from "../../service/databus.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data:any;
  searchResult: any;

  constructor(private route:Router, private client:HttpClient, private dataBus:DataBusService) { }

  ngOnInit(): void {
    this.dataBus.currentApprovalStageMessage.subscribe(msg => this.searchResult = msg)

    console.log(this.searchResult)

    this.client.get(`http://localhost:3000/api/leveling/search/${this.searchResult}`)
      .subscribe(data => {
        this.data = data;
        if (data === {"error": "no_user_found"}) {
          throw data;
        }

        console.log(data)
      })
    ;
  }
}
