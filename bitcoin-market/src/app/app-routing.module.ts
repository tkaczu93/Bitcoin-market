import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteCoinsComponent } from './favorite-coins/favorite-coins.component';
import { MarketDashboardComponent } from './market-dashboard/market-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: MarketDashboardComponent},
  { path: 'favorite', component: FavoriteCoinsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
