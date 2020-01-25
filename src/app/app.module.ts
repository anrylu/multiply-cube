import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MatTabsModule, MatTableModule ],
  declarations: [ AppComponent, HelloComponent, MultiplicationTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
