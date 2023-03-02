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
  czyModalJestWidoczny: boolean = false
  napisWModalu: string 
  zapamietanyCoin: Coin

  constructor (private marketService:MarketService){}
  ngOnInit(): void {
    this.getFavorite()
  }

  zamknijModal(){
    this.czyModalJestWidoczny = false
  }

  pokazModal(coin: Coin){
      this.zapamietanyCoin = coin
      this.napisWModalu = "Do you want to remove " + coin.symbol + " from favorite"
      this.czyModalJestWidoczny = true
  }

  getFavorite(){
    this.marketService.getFavorite().subscribe({
      next:(res) => {
        this.list = res.slice(0, 100);
        console.log(res);
      }
    })
  }
  
  deleteFromFavorite(){
    this.czyModalJestWidoczny = false
    this.marketService.deleteFromFavorite(this.zapamietanyCoin.id).subscribe({
      next: () => {
        window.alert("Coin has been successfuly deleted")
        this.getFavorite()
      }
    })
  }
  
}
