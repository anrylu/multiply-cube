import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MultiplicationTableService } from './multiplication-table.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  multiplicationTableService: MultiplicationTableService;

  name = 'Angular';
  configForm;

  constructor(
    multiplicationTableService: MultiplicationTableService,
    private formBuilder: FormBuilder,
  ) {
    this.multiplicationTableService = multiplicationTableService;
    this.configForm = this.formBuilder.group({
      multiplication_count: multiplicationTableService.multiplication_count,
      face_count: multiplicationTableService.face_count
    });
  }
 
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.multiplicationTableService.multiplication_count = customerData.multiplication_count;
    this.multiplicationTableService.calculate();
    console.log(this.multiplicationTableService.multiplication_count);
  }
}
