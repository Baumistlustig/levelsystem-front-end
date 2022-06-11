import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ApiComponent } from './components/api/api.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { ImpressComponent } from './components/impress/impress.component';
import { DataPolicyComponent } from './components/data-policy/data-policy.component';
import { RootComponent } from './components/root/root.component';

const myRoutes: Routes = [
  { path: '', component: RootComponent },
  { path: 'impress', component: ImpressComponent },
  { path: 'data-policy', component: DataPolicyComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ScrollToTopComponent,
    AboutComponent,
    LoginComponent,
    ApiComponent,
    LeaderboardComponent,
    ImpressComponent,
    DataPolicyComponent,
    RootComponent,
  ],
  imports: [
    RouterModule.forRoot(myRoutes),
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
