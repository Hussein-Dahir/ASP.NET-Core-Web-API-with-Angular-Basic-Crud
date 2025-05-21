import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/models/icustomer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer: Customer = <Customer>{};

  constructor(private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  customerId: number

  ngOnInit() {
    this.customerId = this.route.snapshot.params.id
    this.getCustomerById(this.customerId)
  }

  getCustomerById(id: number) {
    this.customerService.getCustomerById(id).subscribe(response => {
      this.customer = response
    }, error => {
      console.log(error)
    })
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customer).subscribe(response => {
      this.toastr.success('Success!', response)
      this.router.navigate(['/customers/list'])
    }, error => {
      this.toastr.error('Error!', error)
      console.log(error)
    })
  }

}
