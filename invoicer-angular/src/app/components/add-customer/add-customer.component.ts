import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  first_name;
  last_name;
  company;
  email;
  phone;
  street;
  city;
  state;
  zip;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {

  }

  onAddSubmit(){
    console.log('TEST');
  }
}
