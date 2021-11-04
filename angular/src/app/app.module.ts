import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './components/customer/create-customer/create-customer.component'
import { NavbarComponent } from '../app/layout/navbar/navbar.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomerService } from 'src/services/customer.service';
import { ListOfCustomerComponent } from './components/customer/list-of-customer/list-of-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      CreateCustomerComponent,
      EditCustomerComponent,
      ListOfCustomerComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
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
      NgHttpLoaderModule.forRoot(),
      BrowserAnimationsModule,
      ToastrModule.forRoot({
         timeOut: 3000,
         positionClass: 'toast-top-right',
         preventDuplicates: true,
      }),
      FormsModule
   ],
   providers: [
      CustomerService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
