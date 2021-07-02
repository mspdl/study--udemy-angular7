import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

export interface LifecycleEvent {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit {

  @Input() name!: string;
  @Input() age!: number | undefined;
  @Input() food!: string;

  public events: LifecycleEvent[] = [];
  nextEventId: number = 0;

  colors: string[] = ["accent", "warn", "primary"];

  constructor() { // First Call
    console.log(this.name + " - constructor");
    this.newEvent("constructor");
  }

  ngOnChanges() { // Second Call
    console.log(this.name + " - ngOnChanges");
    this.newEvent("ngOnChanges");
  }

  ngOnInit() { // Third Call
    console.log(this.name + " - ngOnInit");
    this.newEvent("ngOnInit");
  }

  ngAfterContentInit() { // Fourth Call
    console.log(this.name + " - ngAfterContentInit");
    this.newEvent("ngAfterContentInit");
  }

  ngAfterViewInit() { // Fifth Call
    console.log(this.name + " - ngAfterViewInit");
    this.newEvent("ngAfterViewInit");
  }

  ngOnDestroy() {
    console.log(this.name + " - ngOnDestroy");
    this.newEvent("ngOnDestroy");
  }

  newEvent(name: string) {
    let id = this.nextEventId++;
    this.events.push({
      id: id,
      name: name,
      color: this.colors[id % this.colors.length]
    })
    setTimeout(() => {
      let idx = this.events.findIndex((e) => e.id == id);
      if (idx >= 0) {
        this.events.splice(idx, 1);
      }
    }, 2000 + this.events.length * 2000);
  }

}
