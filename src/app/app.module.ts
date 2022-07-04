import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { myRoutes } from './app-routing.module';

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
    SearchBarComponent,
    UserComponent,
  ],
  imports: [
    RouterModule.forRoot(myRoutes),
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [SearchBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
export const routing = RouterModule.forRoot(myRoutes);
