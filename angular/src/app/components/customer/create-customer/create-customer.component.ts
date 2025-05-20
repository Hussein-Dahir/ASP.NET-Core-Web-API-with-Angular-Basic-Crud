import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../../../../models/icustomer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = <Customer>{
    customerId: 0
  }

  constructor(private customerService: CustomerService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  submitCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(response => {
      this.toastr.success('Success!', response)
      this.router.navigate(['/customers/list'])
    }, error => {
      this.toastr.error('Error!', error)
      console.log(error)
    })
  }
}
