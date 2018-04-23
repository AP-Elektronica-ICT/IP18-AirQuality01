import { Component, OnInit } from '@angular/core';
import { SensorDataService, IRootObject } from '../../../services/SensorDataService';
import { DatePipe } from '@angular/common'

@Component({
    selector: 'app-diagram',
    templateUrl: './diagram.component.html',
    styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {

    values: IRootObject;

    valuesLength: number;

    shortDates: Array<any> = [];
    longDates: Array<any> = [];
    temperatures: Array<any> = [];
    diagramTemp: Array<any> = [];
    humiditiyLevels: Array<any> = [];
    diagramHumid: Array<any> = [];
    CO2Levels: Array<any> = [];
    diagramCO2: Array<any> = [];
    lightLevels: Array<any> = [];
    diagramLight: Array<any> = [];

    labelData: Array<any> = [];
    emptyData: Array<any> = [];

    constructor(private service: SensorDataService, public datepipe: DatePipe) { }

    ngOnInit() {
        //this.resetValues();
        this.assignValues();
    }

    public chartType: string = 'bar';

    /*public chartDatasets:Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset'}
    ];*/

    //public chartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

    public chartColors: Array<any> = [
        {
            backgroundColor: 'rgba(220,220,220,0.2)',
            borderColor: 'rgba(220,220,220,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(220,220,220,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
        {
            backgroundColor: 'rgba(151,187,205,0.2)',
            borderColor: 'rgba(151,187,205,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(151,187,205,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        }
    ];

    public assignValues() {

        this.service.getVaryData().subscribe(d => {
            this.values = d;
            this.valuesLength = this.values.data.length;
            console.log(this.valuesLength);
            for (let j = 0; j < this.values.data.length; j++) {
                this.labelData[j] = j;
            }
            for (let i = 0; i < this.values.data.length; i++) {
                this.temperatures[i] = this.values.data[i].attributes.temperature;
                this.humiditiyLevels[i] = this.values.data[i].attributes.humidity;
                this.CO2Levels[i] = this.values.data[i].attributes.co2;
                this.lightLevels[i] = this.values.data[i].attributes.light;
                this.longDates[i] = this.values.data[i].attributes.created_at;
                this.shortDates[i] = this.datepipe.transform(this.longDates[i], 'HH:mm');
            };
            this.reverseValues();
            this.diagramTemp = [{ data: this.temperatures, label: 'Temperature' }];
            this.diagramHumid = [{ data: this.humiditiyLevels, label: 'Humidity' }];
            this.diagramCO2 = [{ data: this.CO2Levels, label: 'CO2 level' }];
            this.diagramLight = [{ data: this.lightLevels, label: 'Light level' }];
            
        });
    }
    public resetValues() {
        this.temperatures = this.emptyData;
        this.humiditiyLevels = this.emptyData;
        this.CO2Levels = this.emptyData;
        this.lightLevels = this.emptyData;
        this.longDates = this.emptyData;
        this.shortDates = this.emptyData;

        this.labelData = this.emptyData;
    }

    public reverseValues() {
        this.temperatures.reverse();
        this.humiditiyLevels.reverse();
        this.CO2Levels.reverse();
        this.lightLevels.reverse();
        this.longDates.reverse();
        this.shortDates.reverse();
    }
    public chartOptions: any = {
        responsive: true
    };

    public chartClicked(e: any): void {

    }

    public chartHovered(e: any): void {

    }

}
