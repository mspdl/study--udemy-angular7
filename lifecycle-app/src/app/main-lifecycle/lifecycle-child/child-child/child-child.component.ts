import { AfterContentInit, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.css']
})
export class ChildChildComponent implements OnInit, OnChanges, AfterContentInit {

  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
    console.log(" --- ChildChild ngOnInit. Name = " + this.name);
  }

  ngOnChanges() {
    console.log(" --- ChildChild ngOnChanges. Name = " + this.name);
  }

  ngAfterContentInit() {
    console.log(" --- ChildChild ngAfterContentInit. Name = " + this.name);
  }

}
