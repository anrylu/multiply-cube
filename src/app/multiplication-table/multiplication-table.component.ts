import { Component, Input, OnInit } from '@angular/core';

export interface MultiplyElement {
  multiplier: number;
  result: number[];
  is_unique: boolean[];
}

@Component({
  selector: 'app-multiplication-table',
  templateUrl: './multiplication-table.component.html',
  styleUrls: ['./multiplication-table.component.css']
})
export class MultiplicationTableComponent implements OnInit {
  @Input() multiplication_count: number;
  multiplers: number[] = [];
  data: MultiplyElement[]  = [];

  constructor() {
  }

  ngOnInit() {
    var element: MultiplyElement;
    for( var i=1; i<=this.multiplication_count; i++ ) {
      this.multiplers.push(i);
      element = {multiplier: i, result: [], is_unique: []};
      for( var j=1; j<=this.multiplication_count; j++ ) {
        element.result.push(i*j);
      }
      this.data.push(element);
    }
  }
}