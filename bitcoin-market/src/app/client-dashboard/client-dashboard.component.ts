import { Component, OnInit } from '@angular/core';
import { Person } from '../models';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {

  list: Person[];

  constructor (private clientService:ClientService){}
  ngOnInit(): void {
    this.getPersons()
  }

  getPersons(){
    this.clientService.getPersons().subscribe({
      next:(res) => {
        this.list = res
        console.log(res);
      }
    })
  }

}
