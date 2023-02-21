import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketDashboardComponent } from './market-dashboard/market-dashboard.component';
import { FavoriteCoinsComponent } from './favorite-coins/favorite-coins.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketDashboardComponent,
    FavoriteCoinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
