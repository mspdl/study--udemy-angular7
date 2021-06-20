import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myapp-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  color: string = "accent"
  btnDisabled: boolean = true
  colors = ["primary", "accent", "warn", ""]
  index = 0

  constructor() { }

  getRandomNumber(): void {
    const min = Math.ceil(0);
    let max = Math.floor(this.colors.length);
    let newRandomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (newRandomNumber === this.index) {
      this.index = Math.floor(Math.random() * (max - min)) + min;
    } else {
      this.index = newRandomNumber;
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      this.getRandomNumber()
    }, 5000)
  }

}
