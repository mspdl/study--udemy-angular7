import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  firstName!: string;
  age!: number | undefined;
  clients: Client[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.clients.push({
      firstName: this.firstName,
      age: this.age
    })
    this.firstName = "";
    this.age = undefined;
  }

}
