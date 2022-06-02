import { Component } from '@angular/core';
import { PostService } from "./service/http/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Levelsystem-Front-End';
  posts:any;

  constructor(private service:PostService) {}

  ngOnInit() {  }
}
