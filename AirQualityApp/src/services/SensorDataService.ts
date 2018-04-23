import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
 
@Injectable()
export class SensorDataService {
    private apiHourUrl = 'https://air.kiisu.club/v1/device/air-4/data?limit=60';
    private apiDayUrl = 'https://air.kiisu.club/v1/device/air-4/data?limit=720';
    private apiVaryUrl = 'https://air.kiisu.club/v1/device/air-4/data?limit=60';
    //data: any = {};

    constructor(private http: HttpClient) {
        console.log('Test from API');
        this.getHourData();
    }

    getHourData() : Observable<IRootObject>{
        return this.http.get<IRootObject>(this.apiHourUrl)
            //.map((res: Response) => res.json())
    }
    getDayData() : Observable<IRootObject>{
        return this.http.get<IRootObject>(this.apiDayUrl)
            //.map((res: Response) => res.json())
    }
    getVaryData(period: number) : Observable<IRootObject>{
        this.apiVaryUrl = `https://air.kiisu.club/v1/device/air-4/data?limit=${period}`;
        return this.http.get<IRootObject>(this.apiVaryUrl)
            //.map((res: Response) => res.json())
    }
}

export interface IAttributes {
    temperature: string;
    humidity: string;
    co2: string;
    sound?: any;
    light: string;
    created_at: string;
}

export interface IDatum {
    id: string;
    type: string;
    attributes: IAttributes;
}

export interface IRootObject {
    data: IDatum[];
}



