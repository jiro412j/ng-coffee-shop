import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  addedList = [];

  addToCart(coffee) {
    this.addedList.push(coffee);
  }

  deleteFromList(index) {
    this.addedList.splice(index, 1);
  }
}
