import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  lastCount:number = 0;
  constructor() { }

  ngOnInit() {
  }

  intervalId;

  startGame(){
    console.log("Start Clikced");
    this.intervalId = setInterval(()=>{
      this.intervalFired.emit(this.lastCount + 1);
      this.lastCount++;
    },1000);

    console.log("Interval ID is"+this.intervalId);
  }

  stopGame(){
    clearInterval(this.intervalId);
  }

}
