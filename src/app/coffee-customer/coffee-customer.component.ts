import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-customer',
  templateUrl: './coffee-customer.component.html',
  styleUrls: ['./coffee-customer.component.scss']
})
export class CoffeeCustomerComponent implements OnInit {
  addedList = [];

  constructor() {}

  ngOnInit() {}

  addToCart(coffee) {
    this.addedList.push(coffee);
  }

  deleteFromList(index) {
    this.addedList.splice(index, 1);
  }
}
