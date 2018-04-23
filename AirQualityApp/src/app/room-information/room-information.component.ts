import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SensorDataService, IRootObject } from '../../services/SensorDataService';
import { DecimalPipe } from '@angular/common';
import { Pipe } from '@angular/core';
import { TableComponent } from './table/table.component';
import { GraphComponent } from './graph/graph.component';
import { DiagramComponent } from './diagram/diagram.component';

@Component({
  selector: 'app-room-information',
  templateUrl: './room-information.component.html',
  styleUrls: ['./room-information.component.css']
})
export class RoomInformationComponent implements OnInit {

  values: IRootObject;
  @ViewChild('table') private myTable: TableComponent;
  @ViewChild('graph') private myGraph: GraphComponent;
  @ViewChild('diagram') private myDiagram: DiagramComponent;

  avgTemp: number = 0;
  avgHum: number = 0;
  avgCO2: number = 0;
  avgLight: number = 0;

  //Aantal uren van sensor data weergeven
  displayTime: number;

  valuesChanged: boolean = false;
  
  roomScore: number = 98;

  constructor(private service: SensorDataService) {

   }

  ngOnInit() {
    this.assignValues();
    this.displayTime = this.service.period;
  }

  public btnGraphState: string = "btn btn-black";
  public btnDiagramState: string = "btn";

  private selected: string = "btn btn-black";
  private notSelected: string = "btn";

  public graphActive: boolean = true;
  public diagramActive: boolean = false;

  public setGraphActive(){
    this.btnGraphState = this.selected;
    this.btnDiagramState = this.notSelected;
    this.graphActive = true;
    this.diagramActive = false;
  }
  public setDiagramActive(){
    this.btnGraphState = this.notSelected;
    this.btnDiagramState = this.selected;
    this.diagramActive = true;
    this.graphActive = false;
  }

  public assignValues(){
    this.service.getVaryData().subscribe(d => { 
      this.values = d;
      for(let i = 0; i < this.values.data.length; i++){
        this.avgTemp += (parseFloat(this.values.data[i].attributes.temperature)/this.values.data.length);
        this.avgHum += (parseFloat(this.values.data[i].attributes.humidity)/this.values.data.length);
        this.avgCO2 += (parseFloat(this.values.data[i].attributes.co2)/this.values.data.length);
        this.avgLight += (parseFloat(this.values.data[i].attributes.light)/this.values.data.length);
      };
    })
  }
  public resetValues(){
    this.avgTemp = 0;
    this.avgHum = 0;
    this.avgCO2 = 0;
    this.avgLight = 0;
  }

  public substractInterval(){
    this.valuesChanged = true;
    Math.abs(this.displayTime--);
    this.service.period = this.displayTime;
    this.valuesChanged = false;
    this.resetValues();
    this.assignValues();
    this.myTable.assignValues();
    this.myGraph.resetValues();
    this.myGraph.assignValues();
    this.myDiagram.resetValues();
    this.myDiagram.assignValues();
  }
  public addInterval(){
    this.valuesChanged = true;
    this.displayTime++;
    this.service.period = this.displayTime;
    this.valuesChanged = false;
    this.resetValues();
    this.assignValues();
    this.myTable.assignValues();
    //this.myGraph.resetValues();
    this.myGraph.assignValues();
    //this.myDiagram.resetValues();
    this.myDiagram.assignValues();
    
  }
}
