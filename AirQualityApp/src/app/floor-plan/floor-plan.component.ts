import { Component, OnInit,ElementRef,HostListener} from '@angular/core';
import { document } from 'angular-bootstrap-md/utils/facade/browser';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.css']
})


export class FloorPlanComponent implements OnInit {
showSelected:boolean;
color = "blue";
opacity = 0;
  constructor() {
    this.showSelected = false;
   }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  over()
  {
   this.showSelected=true;
   this.opacity = 0;
   console.log("MouseOver called");
  }
  @HostListener('mouseleave')
  leave()
  {
    this.showSelected=false;
    this.opacity = 1;
    console.log("MouseOver called");
  }

}
