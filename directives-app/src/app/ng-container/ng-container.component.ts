import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    {
      login: "bob",
      role: "admin",
      lastLogin: new Date('2/1/2021')
    },
    {
      login: "john",
      role: "user",
      lastLogin: new Date('4/4/2021')
    },
    {
      login: "maria",
      role: "admin",
      lastLogin: new Date('6/6/2021')
    },
    {
      login: "julie",
      role: "user",
      lastLogin: new Date('7/6/2021')
    },
  ] as any

  constructor() { }

  ngOnInit(): void {
  }

}
