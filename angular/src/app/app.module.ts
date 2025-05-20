import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './components/customer/create-customer/create-customer.component'
import { NavbarComponent } from '../app/layout/navbar/navbar.component'
import { FormsModule } from '@angular/forms';

import { CustomerService } from 'src/services/customer.service';
import { ListOfCustomerComponent } from './components/customer/list-of-customer/list-of-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
   declarations: [],
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule.forRoot(
         [
            { path: '', redirectTo: 'customers', pathMatch: 'full' },
            {
               path: 'customers',
               children: [
                  { path: '', redirectTo: 'list', pathMatch: 'full' },
                  { path: 'list', component: ListOfCustomerComponent },
                  { path: 'create', component: CreateCustomerComponent },
                  { path: 'edit/:id', component: EditCustomerComponent }
               ]
            }
         ]
      ),
      BrowserAnimationsModule,
      ToastrModule.forRoot({
         timeOut: 3000,
         positionClass: 'toast-top-right',
         preventDuplicates: true,
      }),
      FormsModule,
      BrowserModule,
      AppComponent,
      NavbarComponent,
      CreateCustomerComponent,
      EditCustomerComponent,
      ListOfCustomerComponent
   ],
   providers: [
      CustomerService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
