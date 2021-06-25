import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})

export class NgForFormComponent implements OnInit {

  firstName: string = ""
  lastName: string = ""
  address: string = ""
  phone: string = ""
  city: string = ""
  age!: number | null

  cities = [
    {name: "São Paulo", uf: "SP"},
    {name: "Palhoça", uf: "SC"},
    {name: "Rio de Janeiro", uf: "RJ"},
    {name: "Belo Horizonte", uf: "MG"},
  ]

  clients = [] as any

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.clients.push({
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      phone: this.phone,
      city: this.city,
      age: this.age
    })
    console.log(this.clients)
    this.cancel()
  }

  cancel(){
    this.firstName = ""
    this.lastName = ""
    this.address = ""
    this.phone = ""
    this.city = ""
    this.age = null
  }

}
