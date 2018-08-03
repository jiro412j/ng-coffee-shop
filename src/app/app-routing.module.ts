import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeeCustomerComponent } from './coffee-customer/coffee-customer.component';
import { CoffeeOwnerComponent } from './coffee-owner/coffee-owner.component';

const routes: Routes = [
  {
    path: 'customer',
    component: CoffeeCustomerComponent
  },
  {
    path: 'owner',
    component: CoffeeOwnerComponent
  },
  {
    path: '',
    redirectTo: '/customer',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
