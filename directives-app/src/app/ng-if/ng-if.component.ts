import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  show = {
    name: false,
    address: false,
    phone: false,
    age: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
