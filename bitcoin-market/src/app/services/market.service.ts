import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coin, Person } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(private http: HttpClient) { }

  getPersons(){
    return this.http.get<Coin[]>("http://localhost:3000/markets")
  }
}
