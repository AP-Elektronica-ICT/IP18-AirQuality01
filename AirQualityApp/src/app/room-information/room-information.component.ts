import { Component, OnInit, Input } from '@angular/core';
import { SensorDataService, IRootObject } from '../../services/SensorDataService';
import { DecimalPipe } from '@angular/common';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-room-information',
  templateUrl: './room-information.component.html',
  styleUrls: ['./room-information.component.css']
})
export class RoomInformationComponent implements OnInit {

  values: IRootObject;

  //Aantal uren van sensor data weergeven
  //displayTime: number = 1;

  avgTemp: number = 0;
  avgHum: number = 0;
  avgCO2: number = 0;
  avgLight: number = 0;

  displayTime: number;
  
  roomScore: number = 98;

  constructor(private service: SensorDataService) {

   }

  ngOnInit() {
    this.service.getVaryData().subscribe(d => { 
      this.values = d;
      for(let i = 0; i < this.values.data.length; i++){
        this.avgTemp += (parseFloat(this.values.data[i].attributes.temperature)/this.values.data.length);
        this.avgHum += (parseFloat(this.values.data[i].attributes.humidity)/this.values.data.length);
        this.avgCO2 += (parseFloat(this.values.data[i].attributes.co2)/this.values.data.length);
        this.avgLight += (parseFloat(this.values.data[i].attributes.light)/this.values.data.length);
      };
    })
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

  public substractInterval(){
    Math.abs(this.displayTime--);
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
  public addInterval(){
    this.displayTime++;
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
}
