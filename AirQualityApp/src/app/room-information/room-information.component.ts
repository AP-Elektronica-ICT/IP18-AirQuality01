import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-information',
  templateUrl: './room-information.component.html',
  styleUrls: ['./room-information.component.css']
})
export class RoomInformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  public btnGraphState: string = "btn btn-primary";
  public btnDiagramState: string = "btn";

  private selected: string = "btn btn-primary";
  private notSelected: string = "btn";

  public setGraphActive(){
    this.btnGraphState = this.selected;
    this.btnDiagramState = this.notSelected;
  }
  public setDiagramActive(){
    this.btnGraphState = this.notSelected;
    this.btnDiagramState = this.selected;
  }
}
