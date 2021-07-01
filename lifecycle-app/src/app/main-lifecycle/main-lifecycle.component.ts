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

  onEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    if (!this.onEdit) {
      this.clients.push({
        name: this.name,
        age: this.age,
        food: this.food
      })
    }
    this.name = "";
    this.age = undefined;
    this.food = "";
  }

}
