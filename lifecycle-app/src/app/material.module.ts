import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { CheckComponent } from './check/check.component';
import { ChildComponent } from './check/child/child.component';
import { ChildChildComponent } from './main-lifecycle/lifecycle-child/child-child/child-child.component';
import { LifecycleChildComponent } from './main-lifecycle/lifecycle-child/lifecycle-child.component';
import { MainLifecycleComponent } from './main-lifecycle/main-lifecycle.component';


@NgModule({
  declarations: [
    MainLifecycleComponent,
    LifecycleChildComponent,
    ChildChildComponent,
    CheckComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatChipsModule,
    MatSlideToggleModule,
  ],
  exports: [
    MainLifecycleComponent,
    CheckComponent,
  ]
})
export class MaterialModule { }
