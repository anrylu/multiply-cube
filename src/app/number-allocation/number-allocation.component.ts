import { Component, OnInit } from '@angular/core';
import { MultiplicationTableService } from '../multiplication-table.service';

@Component({
  selector: 'app-number-allocation',
  templateUrl: './number-allocation.component.html',
  styleUrls: ['./number-allocation.component.css']
})
export class NumberAllocationComponent implements OnInit {

  multiplicationTableService: MultiplicationTableService;
  constructor(multiplicationTableService: MultiplicationTableService) {
    this.multiplicationTableService = multiplicationTableService;
  }
  ngOnInit() {
  }

}