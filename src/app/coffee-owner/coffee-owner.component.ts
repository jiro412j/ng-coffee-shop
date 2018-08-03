import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-owner',
  templateUrl: './coffee-owner.component.html',
  styleUrls: ['./coffee-owner.component.scss']
})
export class CoffeeOwnerComponent implements OnInit {
  coffeeList = [];
  coffeeName = '';
  coffeePrice = 0;
  coffeeImage = '';
  coffeeIndex: number;

  isEdit = false;

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit() {
    this.coffeeList = this.coffeeService.getCoffeeList();
  }

  editCoffee(coffee, index) {
    this.coffeeName = coffee.name;
    this.coffeePrice = coffee.price;
    this.coffeeImage = coffee.image;
    this.isEdit = true;
    this.coffeeIndex = index;
  }

  saveEditCoffee() {
    const newCoffee = {
      name: this.coffeeName,
      price: this.coffeePrice,
      image: this.coffeeImage
    };
    this.coffeeService.updateCoffee(this.coffeeIndex, newCoffee);
    this.clear();
  }

  deleteCoffee(index) {
    this.coffeeService.deleteCoffee(index);
  }

  addNewCoffee() {
    const coffee = {
      name: this.coffeeName,
      price: this.coffeePrice,
      image: this.coffeeImage
    };
    this.coffeeService.addCoffee(coffee);
    this.clear();
  }

  clear() {
    this.coffeeName = '';
    this.coffeePrice = 0;
    this.coffeeImage = '';
    this.isEdit = false;
  }
}
