import { Component, OnInit } from '@angular/core';
import { MultiplicationTableService } from '../multiplication-table.service';

@Component({
  selector: 'app-number-allocation-aggregate',
  templateUrl: './number-allocation-aggregate.component.html',
  styleUrls: ['./number-allocation-aggregate.component.css']
})
export class NumberAllocationAggregateComponent implements OnInit {

  multiplicationTableService: MultiplicationTableService;
  constructor(multiplicationTableService: MultiplicationTableService) {
    this.multiplicationTableService = multiplicationTableService;
  }

  ngOnInit() {
  }

}