import { Component, Input, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() age!: number;

  clients : Client[]

  constructor() {
    this.clients = [
      {id: 1, name: "Morgan", age: 31},
      {id: 2, name: "Bob", age: 18},
      {id: 1, name: "Ana", age: 22},
      {id: 4, name: "Maria", age: 25}
    ]
  }

  ngOnInit(): void {
  }

}
