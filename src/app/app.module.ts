import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CartComponent } from './cart/cart.component';
import { CoffeeCreateComponent } from './coffee-create/coffee-create.component';
import { CoffeeEditComponent } from './coffee-edit/coffee-edit.component';
import { CoffeeOwnerComponent } from './coffee-owner/coffee-owner.component';
import { CoffeeCustomerComponent } from './coffee-customer/coffee-customer.component';
import { CoffeeService } from './coffee.service';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    CartComponent,
    CoffeeCreateComponent,
    CoffeeEditComponent,
    CoffeeOwnerComponent,
    CoffeeCustomerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
