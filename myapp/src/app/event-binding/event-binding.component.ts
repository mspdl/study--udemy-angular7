import { Component, OnInit } from '@angular/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'myapp-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "My button"
  i = 0
  spinnerMode: ProgressSpinnerMode = 'determinate';
  btnEnable = true

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log('Click')
  }

  increment(){
    this.i++;
    this.buttonName = "It was clicked "+ this.i + " times"
  }

  disable(){
    this.btnEnable = false
    this.spinnerMode = 'indeterminate';
    setTimeout(() => {
      this.btnEnable = true
      this.spinnerMode = "determinate"
    }, 3000);
  }

}
