import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: Array<Number>;

  constructor() {
    this.numbers = [];
  }

  onNewNumber(number: Number) {
    console.log(number);
    this.numbers.push(number);
  }
}
