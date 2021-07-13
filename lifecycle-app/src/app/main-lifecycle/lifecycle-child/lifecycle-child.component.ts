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

  intervalRef;

  constructor() { // First Call
    console.log(this.name + " - constructor");
    this.newEvent("constructor");
    this.intervalRef = setInterval(()=>{
      console.log("interval")
    }, 2000)
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
    console.log("ngAfterContentInit is good for validate what's called inside the component, in the parent call.");
    this.newEvent("ngAfterContentInit");
  }

  ngAfterViewInit() { // Fifth Call
    console.log(this.name + " - ngAfterViewInit");
    console.log("ngAfterViewInit is only called after all view of the page is load (included its components).");
    this.newEvent("ngAfterViewInit");
  }

  ngOnDestroy() {
    console.log(this.name + " - ngOnDestroy");
    console.log("ngOnDestroy is called when the component is destroy, in other words, when it's removed from an array or a condition");
    this.newEvent("ngOnDestroy");
    clearInterval(this.intervalRef);
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
