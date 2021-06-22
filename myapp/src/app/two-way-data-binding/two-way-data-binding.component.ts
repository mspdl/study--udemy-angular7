import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myapp-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1: string = '123';
  name2: string = '456';

  client  = {
    firstName: "",
    lastName: "",
    address: "",
    age: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
