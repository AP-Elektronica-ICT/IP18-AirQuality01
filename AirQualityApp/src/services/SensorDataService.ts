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
    private apiUrl = 'https://air.kiisu.club/v1/device/air-3/data?from_date=2018-04-17T11:00&to_date=2018-4-17T12:00';
    //data: any = {};

    constructor(private http: HttpClient) {
        console.log('Test from API');
        this.getData();
    }

    getData() : Observable<IRootObject>{
        return this.http.get<IRootObject>(this.apiUrl)
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



