import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  configForm;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.configForm = this.formBuilder.group({
      multiplication_count: 9,
      face_count: 6
    });
  }
 
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.configForm.reset();
  }
}
