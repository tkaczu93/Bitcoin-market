import { Component, OnInit } from '@angular/core';
import { Coin } from '../models';
import { MarketService } from '../services/market.service';

@Component({
  selector: 'app-market-dashboard',
  templateUrl: './market-dashboard.component.html',
  styleUrls: ['./market-dashboard.component.scss']
})
export class MarketDashboardComponent implements OnInit {

  list: Coin[];

  constructor (private marketService:MarketService){}
  ngOnInit(): void {
    this.getMarkets()
  }

  getMarkets(){
    this.marketService.getMarkets().subscribe({
      next:(res) => {
        this.list = res.slice(0, 100);
        console.log(res);
      }
    })
  }

  addToFavorite(dodanyCoin: Coin){
    this.marketService.addToFavorite(dodanyCoin).subscribe({
      next: () => {
        window.alert("Coin has been successfuly added")
      }
    })
  }
  
}
