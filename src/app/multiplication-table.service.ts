import { Injectable } from '@angular/core';

export interface ResultElement {
  value: number;
  is_unique: boolean;
}
export interface MultiplyElement {
  multiplier: number;
  result: ResultElement[];
}

@Injectable()
export class MultiplicationTableService {
  // config
  multiplication_count = 9;
  face_count = 6;

  // result
  multiplers: number[] = [];
  data: MultiplyElement[]  = [];
  unique_values: number[] = [];

  calculate() {
    var element: MultiplyElement;
    var result_element: ResultElement;

    // reset data
    this.multiplers = [];
    this.data = [];
    this.unique_values = [];

    // generate data
    for( var i=1; i<=this.multiplication_count; i++ ) {
      this.multiplers.push(i);
      element = {multiplier: i, result: []};
      for( var j=1; j<=this.multiplication_count; j++ ) {
        result_element = {value: i*j, is_unique: false};
        element.result.push(result_element);
      }
      this.data.push(element);
    }

    // check unique
    for( var i=0; i<this.multiplication_count; i++ ) {
      for( var j=0; j<this.multiplication_count; j++ ) {
        if( this.unique_values.indexOf(this.data[j].result[i].value) < 0 ) {
          this.unique_values.push(this.data[j].result[i].value);
          this.data[j].result[i].is_unique = true;
        }
      }
    }
  }

  constructor() {
    this.calculate();
  }
}