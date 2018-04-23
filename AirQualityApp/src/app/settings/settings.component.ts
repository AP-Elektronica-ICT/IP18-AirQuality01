import { Component, OnInit} from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import { AngularFireAction } from 'angularfire2/database/interfaces';
import { connect } from 'tls';
import {settingsData} from '../../services/settingsData'; 
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
room1:AngularFireList<any>;
sensors: Observable<any[]>;
settings:string = "settings";
settingsValueRef:AngularFireList<any>;
settingsValue:Observable<any[]>

test:string = "0";
test2:string = "0"; 
room: number[] = [1,2,3,4,5,6];

MinimumTemperatureValues : number[] = [5,5,5,5,5,5];
MiniTemp : number = this.MinimumTemperatureValues[0];

MaximumTemperatureValues : number[] = [20,20,20,20,20,20];
MaxiTemp : number = this.MaximumTemperatureValues[0];

MinimumHumidityValues : number[] = [10,10,10,10,10,10];
MiniHum : number = this.MinimumHumidityValues[0];

MaximumHumidityValues : number[] = [30,30,30,30,30,30];
MaxiHum : number = this.MaximumHumidityValues[0];

MaximumCO2: number[] = [500,500,500,500,500,500];
MaxiCO2 : number = this.MaximumCO2[0];

LightLevel :number[] = [200,200,200,200,200,200];
Light: number = this.LightLevel[0];
nr : number = 1;

  constructor(private db: AngularFireDatabase,private Data:settingsData) { }
  ngOnInit() {
    this.room1 = this.db.list('/room');
    this.sensors = this.room1.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

  }

  get roomNr()
  {
    //console.log("get" + this.nr);
    return this.nr;
  }
  set roomNr(value: number)
  {
    this.nr = value;
    console.log("set" + this.nr);
    this.changeValue();
  }

  updateTemp(key: string, newText: string,id:string,temp:string) {
    console.log(this.test);
    this.test = id;
    console.log(this.test);
    this.room1.update(key, { temp: newText });
    this.Data.setValue(this.test,temp);
   // this.test2 = this.Data.getValue();
    console.log(this.Data.getValue());
  }
  updateMaxTemp(key: string, newText: string,id:string,maxtemp:string) {
    this.room1.update(key, { maxtemp: newText });
    this.Data.setValueMaxTemp(id,maxtemp);
  }
  updateCO2(key: string, newText: string,id:string,co2:string) {
    this.room1.update(key, { co2: newText });
    this.Data.setValueMinCo2(id,co2);
  }
  updateHum(key: string, newText: string,id:string,minHum:string) {
    this.room1.update(key, { hum: newText });
    this.Data.setValueMinHum(id,minHum)
  }
  updateMaxHum(key: string, newText: string,id:string,maxHum:string) {
    this.room1.update(key, { maxhum: newText });
    this.Data.setValueMaxHum(id,maxHum);
  }
  updateMaxCo2(key: string, newText: string,id:string,maxCo2:string) {
    this.room1.update(key, { maxCo2: newText });
    this.Data.setValueMaxCo2(id,maxCo2);
  }
  updateLight(key:string,newText:string,id:string,light:string)
  {
    this.room1.update(key, { light: newText });
    this.Data.setValueLight(id,light);
  }
  opslaan()
  {
    console.log("test  " + this.nr);
    if(this.nr == 1)
    {
      this.MinimumTemperatureValues[0] = this.MiniTemp;
      this.MaximumTemperatureValues[0] = this.MaxiTemp;
      
      this.MinimumHumidityValues[0] = this.MiniHum;
      this.MaximumHumidityValues[0] = this.MaxiHum;

      this.MaximumCO2[0] = this.MaxiCO2;
      this.LightLevel[0] = this.Light;
    }
    else if(this.nr == 2)
    {
      this.MinimumTemperatureValues[1] = this.MiniTemp;
      this.MaximumTemperatureValues[1] = this.MaxiTemp;
      
      this.MinimumHumidityValues[1] = this.MiniHum;
      this.MaximumHumidityValues[1] = this.MaxiHum;

      this.MaximumCO2[1] = this.MaxiCO2;
      this.LightLevel[1] = this.Light;
    }
    else if(this.nr == 3)
    {
      this.MinimumTemperatureValues[2] = this.MiniTemp;
      this.MaximumTemperatureValues[2] = this.MaxiTemp;
      
      this.MinimumHumidityValues[2] = this.MiniHum;
      this.MaximumHumidityValues[2] = this.MaxiHum;

      this.MaximumCO2[2] = this.MaxiCO2;
      this.LightLevel[2] = this.Light;
    }
    else if(this.nr == 4)
    {
      this.MinimumTemperatureValues[3] = this.MiniTemp;
      this.MaximumTemperatureValues[3] = this.MaxiTemp;
      
      this.MinimumHumidityValues[3] = this.MiniHum;
      this.MaximumHumidityValues[3] = this.MaxiHum;

      this.MaximumCO2[3] = this.MaxiCO2;
      this.LightLevel[3] = this.Light;
    }
    else if(this.nr == 5)
    {
      this.MinimumTemperatureValues[4] = this.MiniTemp;
      this.MaximumTemperatureValues[4] = this.MaxiTemp;
      
      this.MinimumHumidityValues[4] = this.MiniHum;
      this.MaximumHumidityValues[4] = this.MaxiHum;

      this.MaximumCO2[4] = this.MaxiCO2;
      this.LightLevel[4] = this.Light;
    }
    else if(this.nr == 6)
    {
      this.MinimumTemperatureValues[5] = this.MiniTemp;
      this.MaximumTemperatureValues[5] = this.MaxiTemp;
      
      this.MinimumHumidityValues[5] = this.MiniHum;
      this.MaximumHumidityValues[5] = this.MaxiHum;

      this.MaximumCO2[5] = this.MaxiCO2;
      this.LightLevel[5] = this.Light;
    }
  }

  changeValue()
  {
    console.log("change" + this.nr);
    if(this.nr == 1)
    {
      this.MiniTemp = this.MinimumTemperatureValues[0];
      this.MaxiTemp = this.MaximumTemperatureValues[0];

      this.MiniHum = this.MinimumHumidityValues[0];
      this.MaxiHum = this.MaximumHumidityValues[0];

      this.MaxiCO2 = this.MaximumCO2[0];
      this.Light = this.LightLevel[0];
    }
    else if(this.nr == 2)
    {
      this.MiniTemp = this.MinimumTemperatureValues[1];
      this.MaxiTemp = this.MaximumTemperatureValues[1];

      this.MiniHum = this.MinimumHumidityValues[1];
      this.MaxiHum = this.MaximumHumidityValues[1];

      this.MaxiCO2 = this.MaximumCO2[1];
      this.Light = this.LightLevel[1];
    }
    else if(this.nr == 3)
    {
      this.MiniTemp = this.MinimumTemperatureValues[2];
      this.MaxiTemp = this.MaximumTemperatureValues[2];

      this.MiniHum = this.MinimumHumidityValues[2];
      this.MaxiHum = this.MaximumHumidityValues[2];

      this.MaxiCO2 = this.MaximumCO2[2];
      this.Light = this.LightLevel[2];
    }
    else if(this.nr == 4)
    {
      this.MiniTemp = this.MinimumTemperatureValues[3];
      this.MaxiTemp = this.MaximumTemperatureValues[3];

      this.MiniHum = this.MinimumHumidityValues[3];
      this.MaxiHum = this.MaximumHumidityValues[3];

      this.MaxiCO2 = this.MaximumCO2[3];
      this.Light = this.LightLevel[3];
    }
    else if(this.nr == 5)
    {
      this.MiniTemp = this.MinimumTemperatureValues[4];
      this.MaxiTemp = this.MaximumTemperatureValues[4];

      this.MiniHum = this.MinimumHumidityValues[4];
      this.MaxiHum = this.MaximumHumidityValues[4];

      this.MaxiCO2 = this.MaximumCO2[4];
      this.Light = this.LightLevel[4];
    }
    else if(this.nr == 6)
    {
      this.MiniTemp = this.MinimumTemperatureValues[5];
      this.MaxiTemp = this.MaximumTemperatureValues[5];

      this.MiniHum = this.MinimumHumidityValues[5];
      this.MaxiHum = this.MaximumHumidityValues[5];

      this.MaxiCO2 = this.MaximumCO2[5];
      this.Light = this.LightLevel[5];
    }
  }
}
