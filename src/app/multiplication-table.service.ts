import { Injectable } from '@angular/core';

export interface ResultElement {
  value: number;
  is_unique: boolean;
}
export interface MultiplyElement {
  multiplier: number;
  result: ResultElement[];
}

export interface AllocationElement {
  result: number[];
  forbidden: number[];
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
  number_forbidden: number[][] = [];
  number_allocation: AllocationElement[] = [];

  check_number_forbidden(number_allocation, new_value, dryrun) {
    var ret = 0;
    for( var i=0; i<this.multiplication_count; i++) {
      if( this.number_forbidden[i].indexOf(new_value) > 0 ) {
        if( !dryrun ) {
          number_allocation.forbidden = number_allocation.forbidden.concat(this.number_forbidden[i]);
        }
        ret++;
      }
    }
    return ret;
  }

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

    // generate number forbidden
    for( var i=0; i<this.multiplication_count; i++ ) {
      this.number_forbidden.push([]);
      for( var j=0; j<this.multiplication_count; j++ ) {
        this.number_forbidden[i].push((i+1)*(j+1));
      }
    }

    // calculate number allcation
    let unique_values = Array.from(this.unique_values);
    // 1's multiples
    for( var i=0; i<this.multiplication_count; i++ ) {
      this.number_allocation.push({result: [unique_values[0]], forbidden: []});
      this.check_number_forbidden(this.number_allocation[i], unique_values[0], false);
      unique_values.shift()
    }

prev_check_number_forbidden_ret = this.check_number_forbidden(this.number_allocation[i], unique_values[j], true);
    // others
    var run_count = 0;
    while( run_count < 1000 && unique_values.length > 0 ) {
      run_count++;
      for( var i=0; i<this.multiplication_count; i++ ) {
        var selected_index = -1;
        var prev_check_number_forbidden_ret = 0;
        var curr_check_number_forbidden_ret = 0;
        for( var j=0; j<unique_values.length; j++ ) {
        }
      }
    }
    for( var i=0; i<unique_values.length; i++ ) {
      for( var j=0; j<this.multiplication_count; j++ ) {
        if( this.number_allocation[j].result.length >= 4 ) continue;
        if( this.number_allocation[j].forbidden.indexOf(unique_values[i]) < 0 ) {
          this.number_allocation[j].result.push(unique_values[i]);
          this.add_number_forbidden(this.number_allocation[j], unique_values[i]);
          break;
        }
      }
    }
    console.log(this.number_allocation);
  }

  constructor() {
    this.calculate();
  }
}