import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    "Morgan",
    "Bob",
    "John",
    "Ana",
    "Marie",
  ]

  cities = [
    {name: "São Paulo", uf: "SP"},
    {name: "Palhoça", uf: "SC"},
    {name: "Rio de Janeiro", uf: "RJ"},
    {name: "Belo Horizonte", uf: "MG"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
