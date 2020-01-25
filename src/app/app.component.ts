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
  multiplication_count = 9;
  face_count = 6;
  configForm;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.configForm = this.formBuilder.group({
      multiplication_count: this.multiplication_count,
      face_count: this.face_count
    });
  }
 
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.multiplication_count = customerData.multiplication_count;
    console.log(this.multiplication_count);
  }
}
