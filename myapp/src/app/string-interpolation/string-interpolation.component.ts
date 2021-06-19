import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myapp-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstName = "Morgan";
  age = 31;
  person = {
    firstName: "Morgan",
    lastName: "Espindola",
    age: 31,
    address: "Rua das palmeiras, 64 "
  }

  constructor() { }

  ngOnInit(): void {
  }

}
