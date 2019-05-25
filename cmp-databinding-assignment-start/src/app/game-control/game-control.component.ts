import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() newNumberAvailable = new EventEmitter();

  private currentNumber = 0;
  private interval;

  constructor() {
  }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(() => {
      this.newNumberAvailable.emit(this.currentNumber);
      this.currentNumber++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }
}
