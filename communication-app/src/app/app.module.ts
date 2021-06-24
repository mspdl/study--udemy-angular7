import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ClientComponent } from './input-binding/client/client.component';
import { InputBindingComponent } from './input-binding/input-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
