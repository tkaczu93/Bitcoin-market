import { Component, OnInit } from '@angular/core';
import { Coin, Person } from '../models';
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
    this.getPersons()
  }

  getPersons(){
    this.marketService.getPersons().subscribe({
      next:(res) => {
        this.list = res.slice(0, 100);
        console.log(res);
      }
    })
  }

}
