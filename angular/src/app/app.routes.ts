import { Routes } from '@angular/router';
import { CreateCustomerComponent } from './components/customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { ListOfCustomerComponent } from './components/customer/list-of-customer/list-of-customer.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'customers',
        pathMatch: 'full'
    },
    {
        path: 'customers',
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ListOfCustomerComponent },
            { path: 'create', component: CreateCustomerComponent },
            { path: 'edit/:id', component: EditCustomerComponent }
        ]
    }
];
