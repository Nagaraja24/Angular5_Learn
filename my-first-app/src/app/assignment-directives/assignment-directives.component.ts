import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-directives',
  templateUrl: './assignment-directives.component.html',
  styleUrls: ['./assignment-directives.component.css']
})
export class AssignmentDirectivesComponent implements OnInit {

  isDipalay = true;
  details = [];
  count: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onButtonClick(){
    this.count++;
    this.details.push(new Date());
    this.isDipalay = !this.isDipalay;
  }

}
