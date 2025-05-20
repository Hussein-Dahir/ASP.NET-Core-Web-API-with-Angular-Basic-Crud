import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/services/customer.service';
import { Router, RouterModule } from '@angular/router';
import { Customer } from '../../../../models/icustomer';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-list-of-customer',
  templateUrl: './list-of-customer.component.html',
  styleUrls: ['./list-of-customer.component.css']
})
export class ListOfCustomerComponent implements OnInit {
  customers: Customer[] = []
  valuesForDeleteModal: any = {
    isShowDeleteModal: false
  }

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getCustomers()
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(
      response => {
        this.customers = response
      },
      error => {
        console.log(error)
      })
  }

  navToEditPage(id: number) {
    this.router.navigate(['/customers/edit', id])
  }

  deleteCustomer(customerId: number) {
    this.customerService.deleteCustomerById(customerId).subscribe(response => {
      this.reloadTable();
      this.toastr.success('Success!', response)
    }, error => {
      this.toastr.error('Error!', error)
      console.log(error)
    })
  }

  reloadTable() {
    this.getCustomers()
  }
}
