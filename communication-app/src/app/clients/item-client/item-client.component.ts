import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemClientComponent implements OnInit {

  @Input() client! : Client;
  @Output() updateClient = new EventEmitter<Client>();
  @Output() removeClient = new EventEmitter<Client>();

  onEdit: boolean = false;
  firstName!: string;
  age!: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    this.onEdit = true;
    this.firstName = this.client.firstName;
    this.age = this.client.age;
  }

  remove() {
    this.removeClient.emit(this.client);
  }

  save(){
    this.onEdit = false;
    this.updateClient.emit(this.client = {
      firstName: this.firstName,
      age: this.age
    });
  }

}
