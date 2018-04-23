import { Component, OnInit } from '@angular/core';
import { SensorDataService, IRootObject } from '../../../services/SensorDataService';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  values : IRootObject;

  valuesLength : number;

  //chartDatasets: Array<any> = [];
  dates : Array<any> = [];
  temperatures : Array<any> = [];
  chartTemp : Array<any> = [];
  humiditiyLevels : Array<any> = [];
  chartHumid : Array<any> = [];
  CO2Levels : Array<any> = [];
  chartCO2 : Array<any> = [];

  testData: Array<any> = [65, 59, 80, 81, 56, 55, 40, 1, 100, 123, 123, 32, 10, 1, 5, 20];
  labelData: Array<any> = [];
  labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  constructor(private service: SensorDataService) { 
    
  }

  ngOnInit() {
    this.service.getData().subscribe(d => { 
      this.values = d;
      this.valuesLength = this.values.data.length;
      console.log(this.valuesLength);
      for(let j = 0; j < this.values.data.length; j++){
        this.labelData[j] = j; 
      }
      for(let i = 0; i < this.values.data.length; i++){
        this.temperatures[i] = this.values.data[i].attributes.temperature;
        this.humiditiyLevels[i] = this.values.data[i].attributes.humidity;
        this.CO2Levels[i] = this.values.data[i].attributes.co2;
        this.dates[i] = this.values.data[i].attributes.created_at;
      };
      this.chartTemp = [{ data: this.temperatures, label: 'Temperature' }];
      this.chartHumid = [{ data: this.humiditiyLevels, label: 'Humidity' }];
      this.chartCO2 = [{ data: this.CO2Levels, label: 'CO2 level' }];
    });
  }


  public chartType: string = 'line';

  /*public chartDatasets: Array<any> = [
    //{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Temperature per seconds' },
    { data: this.testData, label: 'Temperature per 41s' }
    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Temperature per minutes' }
  ];*/

  public chartLabels: Array<any> = this.labelData;


  public chartColors: Array<any> = [
      {
      backgroundColor: 'rgba(151,187,205,0.2)',
      borderColor: 'rgba(151,187,205,1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(151,187,205,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(151,187,205,1)'
    },
    /*{
        backgroundColor: 'rgba(220,220,220,0.2)',
        borderColor: 'rgba(220,220,220,1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(220,220,220,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(220,220,220,1)'
      }*/
  ];

  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void {

  }

  public chartHovered(e: any): void {

  }
}
