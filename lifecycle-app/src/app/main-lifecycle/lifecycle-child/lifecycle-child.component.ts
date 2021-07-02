import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit {

  @Input() name!: string;
  @Input() age!: number | undefined;
  @Input() food!: string;

  constructor() { // First Call
    console.log(this.name + " - constructor")
   }

   ngOnChanges() { // Second Call
    console.log(this.name + " - ngOnChanges")
  }

  ngOnInit() { // Third Call
    console.log(this.name + " - ngOnInit")
  }

  ngAfterContentInit(){ // Fourth Call
    console.log(this.name + " - ngAfterContentInit")
  }

  ngAfterViewInit(){ // Fifth Call
    console.log(this.name + " - ngAfterViewInit")
  }

  ngOnDestroy() {
    console.log(this.name + " - ngOnDestroy")
  }

}
