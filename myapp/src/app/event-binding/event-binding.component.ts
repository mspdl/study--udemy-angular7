import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'myapp-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})


export class EventBindingComponent implements OnInit {

  FULL_CIRLE = 100
  buttonName = "My button"
  i = 0
  spinnerValue = 0
  spinnerMode: ProgressSpinnerMode = 'determinate';
  btnEnable = true

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log('Click')
  }

  increment() {
    this.i++
    let rest = this.i % this.FULL_CIRLE
    this.spinnerValue = rest === 0 ? this.FULL_CIRLE : rest
    this.buttonName = "You clicked me " + this.i + " times"
    if (rest === 0) {
      this.buttonName += " - You are going to reset the spinner value!!!"
    }
  }

  disable() {
    this.btnEnable = false
    this.spinnerMode = 'indeterminate';
    setTimeout(() => {
      this.btnEnable = true
      this.spinnerMode = "determinate"
    }, 3000);
  }

}