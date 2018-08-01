import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent implements OnInit {
  coffeeList = [
    {
      name: 'Green Tea',
      price: 100,
      image: 'https://globalassets.starbucks.com/assets/9e8fc57b10cb4c5fbfc5422acff4dc57.jpg',
      is_recommended: true
    },
    {
      name: 'Late',
      price: 120,
      image: 'https://globalassets.starbucks.com/assets/23efb9e2cd284d6b8a17d52f57d363a8.jpg',
      is_recommended: true
    },
    {
      name: 'Milk',
      price: 80,
      image: 'https://globalassets.starbucks.com/assets/574bb3dfc4ff4294b172301f0848e17f.jpg',
      is_recommended: false
    }
  ];

  @Output() added = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  addCoffeeToCart(coffee) {
    this.added.emit(coffee);
  }
}
