import { Component, OnInit, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { SensorDataService, IRootObject, IDatum, IAttributes } from '../../../services/SensorDataService';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  values: IRootObject;

  constructor(private service: SensorDataService) { 
    
  }

  ngOnInit() {
    this.assignValues();
  }

  assignValues(){
    this.service.getVaryData().subscribe(d => {
      this.values = d});
  }

}