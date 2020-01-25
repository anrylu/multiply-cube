import { Component, Input, OnInit } from '@angular/core';
import { MultiplicationTableService } from '../multiplication-table.service';



@Component({
  selector: 'app-multiplication-table',
  templateUrl: './multiplication-table.component.html',
  styleUrls: ['./multiplication-table.component.css']
})
export class MultiplicationTableComponent implements OnInit {
  multiplicationTableService: MultiplicationTableService;
  constructor(multiplicationTableService: MultiplicationTableService) {
    this.multiplicationTableService = multiplicationTableService;
  }

  ngOnInit() {
  }
}