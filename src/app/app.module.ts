import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';
import { MultiplicationTableService } from './multiplication-table.service';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MatTabsModule ],
  declarations: [ AppComponent, HelloComponent, MultiplicationTableComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MultiplicationTableService]
})
export class AppModule { }
