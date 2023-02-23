import { Component } from '@angular/core';
import { Coin } from '../models';
import { MarketService } from '../services/market.service';

@Component({
  selector: 'app-favorite-coins',
  templateUrl: './favorite-coins.component.html',
  styleUrls: ['./favorite-coins.component.scss']
})
export class FavoriteCoinsComponent {
  list: Coin[];

  constructor (private marketService:MarketService){}
  ngOnInit(): void {
    this.getFavorite()
  }

  getFavorite(){
    this.marketService.getFavorite().subscribe({
      next:(res) => {
        this.list = res.slice(0, 100);
        console.log(res);
      }
    })
  }

}
