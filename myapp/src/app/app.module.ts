import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './myfirst.component';
import { Test1Component } from './tests/test1/test1.component';
import { Test2Component } from './tests/test2/test2.component';
import { Test3Component } from './tests/test3/test3.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    Test1Component,
    Test2Component,
    Test3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
