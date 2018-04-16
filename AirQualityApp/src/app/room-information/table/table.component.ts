import { Component, OnInit } from '@angular/core';
import { SensorDataService, IRootObject, IDatum } from '../../../services/SensorDataService';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  list : IDatum;

  constructor(private service: SensorDataService) { 
    
  }

  ngOnInit() {
    this.service.getData().subscribe(d => this.list = d);
  }

}
