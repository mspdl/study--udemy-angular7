import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit {

  foods: string[] = ["Rice", "Beans", "Pizza"];
  clients: Client[] = [
    { name: "Morgan", age: 31, food: "Pizza" }
  ];

  name!: string;
  age!: number | undefined;
  food!: string;

  editedClientId: number = -1;

  randomNumber!: number;

  constructor() {
   this.generateRandomNumber();
  }

  ngOnInit(): void {
  }

  generateRandomNumber() {
    this.randomNumber = Math.round(Math.random()*1000);
  }

  save() {
    if (this.editedClientId < 0) {
      this.clients.push({
        name: this.name,
        age: this.age,
        food: this.food
      })
    } else {
      this.clients[this.editedClientId].name = this.name;
      this.clients[this.editedClientId].age = this.age;
      this.clients[this.editedClientId].food = this.food;
    }
    this.name = "";
    this.age = undefined;
    this.food = "";
    this.editedClientId = -1;
  }

  edit(clientID: number) {
    this.name = this.clients[clientID].name;
    this.age = this.clients[clientID].age;
    this.food = this.clients[clientID].food;
    this.editedClientId = clientID;
  }

  delete(clientID: number) {
    this.clients.splice(clientID, 1);
  }

}
