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
  displayedColumns: string[] = ["0"];
  data: MultiplyElement[]  = [];

  constructor() {
  }

  ngOnInit() {
    var element: MultiplyElement;
    for( var i=1; i<=this.multiplication_count; i++ ) {
      this.displayedColumns.push(i.toString());
      element = {multiplier: i, result: [], is_unique: []};
      element.result.push(i);
      for( var j=1; j<=this.multiplication_count; j++ ) {
        element.result.push(i*j);
      }
      this.data.push(element);
    }


    console.log(this.multiplication_count);
    console.log(this.displayedColumns);
  }

}