import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coin } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  marketsUrl: string = "http://localhost:3000/markets"
  favoriteUrl: string = "http://localhost:3000/favorite"

  constructor(private http: HttpClient) { }

  getMarkets(){
    return this.http.get<Coin[]>(this.marketsUrl)
  }
  
  getFavorite(){
    return this.http.get<Coin[]>(this.favoriteUrl)
  }

  addToFavorite (dodanyCoin: Coin){
    return this.http.post(this.favoriteUrl, dodanyCoin)
  }
}
