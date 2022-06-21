import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { DataBusService } from "../../service/databus.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {

  constructor(private route:Router, private client:HttpClient, private dataBus:DataBusService) {  }

  ngOnInit(): void {
    this.dataBus.currentApprovalStageMessage.subscribe(msg => this.searchResult = msg);
  }

  searchResult: string = '';

  search(){
    if (this.searchResult === '') {
      return;
    }
    this.dataBus.updateApprovalMessage(this.searchResult)

    this.route.navigate(['/user']);
  }
}
