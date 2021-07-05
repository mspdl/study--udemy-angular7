import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  name: string = "";
  age!: number | undefined;

  constructor() {
    console.log(" --- CheckChild - constructor");
  }

  ngOnInit() {
    console.log(" --- CheckChild - ngOnInit");
  }

  ngOnChanges() {
    console.log(" --- CheckChild - ngOnChanges");
  }

  ngDoCheck() {
    console.log(" --- CheckChild - ngDoCheck");
  }

  ngAfterContentInit() {
    console.log(" --- CheckChild - ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log(" --- CheckChild - ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log(" --- CheckChild - ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log(" --- CheckChild - ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log(" --- CheckChild - ngOnDestroy");
  }

}
