import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

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

  ngOnChanges(changes: SimpleChanges) { // Second Call
    console.log(changes);
    console.log(this.name + " - ngOnChanges");
    this.newEvent("ngOnChanges");
    if (changes['name']) {
      console.log("new name = " + changes['name'].currentValue)
      console.log("old name = " + changes['name'].previousValue)
    }
    for (let propName in changes) {
      console.log("old value of changed prop " + propName + "= " + changes[propName].previousValue)
      console.log("new value of changed prop " + propName + "= " + changes[propName].currentValue)
      console.log("propName = " + propName)
    }
  }

  ngOnInit() { // Third Call
    console.log(this.name + " - ngOnInit");
    console.log("ngOnInit is the first method for @Inputs and it's better for validation. It's the method called for a parent component.")
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
