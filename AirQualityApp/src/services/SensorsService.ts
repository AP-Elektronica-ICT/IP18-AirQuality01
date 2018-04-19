import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
 
@Injectable()
export class SensorsService {
    private apiUrl = 'https://air.kiisu.club/v1/devices';
    data: any = {};

    constructor(private http: HttpClient) {
        console.log('Test from API');
        this.getData();
    }

    getData() : Observable<IDatum>{
        return this.http.get<IDatum>(this.apiUrl)
            //.map((res: Response) => res.json())
    }
}

export interface IAttributes {
    device_id: string;
    id: number;
    data_url: string;
}

export interface IDatum {
    id: string;
    type: string;
    attributes: IAttributes;
}

export interface IRootObject {
    data: IDatum[];
}



