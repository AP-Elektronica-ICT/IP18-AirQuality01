import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.css']
})


export class FloorPlanComponent implements OnInit {
floor:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  changefloor1()
  {
    this.floor = true;
    console.log(1);
  }

  changefloor2()
  {
    this.floor = false;
    console.log(2);
  }

}
