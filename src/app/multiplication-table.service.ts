import { Injectable } from '@angular/core';

export interface MultiplyElement {
  multiplier: number;
  result: number[];
  is_unique: boolean[];
}

@Injectable()
export class MultiplicationTableService {
  // config
  multiplication_count = 9;
  face_count = 6;

  // result
  multiplers: number[] = [];
  data: MultiplyElement[]  = [];

  calculate() {
    var element: MultiplyElement;

    this.multiplers = [];
    this.data = [];
    for( var i=1; i<=this.multiplication_count; i++ ) {
      this.multiplers.push(i);
      element = {multiplier: i, result: [], is_unique: []};
      for( var j=1; j<=this.multiplication_count; j++ ) {
        element.result.push(i*j);
      }
      this.data.push(element);
    }
  }

  constructor() {
    this.calculate();
  }
}