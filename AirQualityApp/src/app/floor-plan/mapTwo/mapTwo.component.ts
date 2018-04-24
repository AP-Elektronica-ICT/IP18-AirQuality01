import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {settingsData} from '../../../services/settingsData';
import { SensorDataService, IRootObject } from '../../../services/SensorDataService';


@Component({
  selector: 'app-mapTwo',
  templateUrl: './mapTwo.component.html',
  styleUrls: ['./mapTwo.component.css']
})
export class MapTwoComponent implements OnInit {
RoomItemsRef: AngularFireList<any>;
RoomItems:Observable<any[]>;
/* TODO array aanmaken van kamers en colors zodat elke kamer zijn kleur krijgt*/
heighta:string = "0";
widtha:string="0";
X:String="0";
Y:String="0";
Color:String="0";
ID:String="0";
Room:string;

values: IRootObject;

Light:string[];
Light2:number[] = [0,0,0,0,0,0,0,0];
lightData:number = 0;

temp:string[];
temp2:number[] = [0,0,0,0,0,0,0,0];

maxtemp:string[];
maxtemp2:number[] = [0,0,0,0,0,0,0,0];

minhum:string[];
minhum2:number[] = [0,0,0,0,0,0,0,0];

maxhum:string[];
maxhum2:number[] = [0,0,0,0,0,0,0,0];

minCo2:string[];
minCo22:number[] = [0,0,0,0,0,0,0,0];

maxCo2:string[];
maxCo22:number[] = [0,0,0,0,0,0,0,0];

IDD:String="0";
color= "reds"; // default waarde 
//Binnenhalen van Value AirQuality en toewijzen aan Room
//Hieronder nog fictieve waarden

Room1 = new Room(41);

  constructor(private db:AngularFireDatabase, private router:Router,private Data:settingsData,private service:SensorDataService) { }
/* 
AirQuality value verdelen in 5 groepen(nog fictieve waarden)
  * 0  - 10 ver onder de goede waarde  ==> blauwe kleur
  * 11 - 20 iets onder de goede waarde ==> blauwgroene kleur
  * 21 - 30 op de goede waarde         ==> groene kleur
  * 31 - 40 iets boven de goed waarde  ==> oranje kleur
  * 41 - 50 ver boven de goede waarde  ==> rode kleur
*/
  ngOnInit() {
    //this.AssignValue();
    this.RoomItemsRef = this.db.list('/DrawRoom');
    this.RoomItems = this.RoomItemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

    console.log(this.Data.getValueLight());

    if((this.Room1.getValue() > 0)&&(this.Room1.getValue()<=10))
    {
      this.color = "#00bfff";
    }    
    if((this.Room1.getValue() > 10)&&(this.Room1.getValue()<=20))
    {
      this.color = "#00ffbf";
    }
    if((this.Room1.getValue() > 20)&&(this.Room1.getValue()<=30))
    {
      this.color = "#40ff00";
    }
    if((this.Room1.getValue() > 30)&&(this.Room1.getValue()<=40))
    {
      this.color = "#ffbf00";
    }
    if((this.Room1.getValue() > 40)&&(this.Room1.getValue()<=50))
    {
      this.color = "#ff0000";
    }


     

  }
  AssignValue()
  {
    this.service.getLatestData().subscribe(d => { 
      this.values = d;
      this.lightData = parseFloat(this.values.data[0].attributes.light);
      console.log(this.lightData);

     /* if((this.lightData > 0)&&(this.lightData<=20))
      {
        this.RoomItemsRef.update("room2",{color:"#0F2D00"});
      }
      if((this.lightData > 20)&&(this.lightData<=40))
      {
        this.RoomItemsRef.update("room2",{color:"#153F00"});
      }
      if((this.lightData > 40)&&(this.lightData<=65))
      {
        this.RoomItemsRef.update("room2",{color:"#205F00"});
      }
      if((this.lightData > 60)&&(this.lightData<=490))
      {
        this.RoomItemsRef.update("room2",{color:"#38A202"});
      }
      if((this.lightData > 490)&&(this.lightData<=510))
      {
        this.RoomItemsRef.update("room2",{color:"#39A701"});
      }
      if((this.lightData > 510)&&(this.lightData<=520))
      {
        this.RoomItemsRef.update("room2",{color:"#40C000"});
      }
      if(this.lightData > 520)
      {
        this.RoomItemsRef.update("room2",{color:"#51F102"});
      }*/
      
    });
  }
  AddRoom()
  {
    console.log(this.heighta);
    console.log(this.widtha);
    console.log(this.X);
    console.log(this.Y);
    console.log(this.Color);
    console.log(this.ID);
    this.Room = "room" + this.ID;
    this.RoomItemsRef.update(this.Room,{color:this.Color,id:this.ID,height:this.heighta,width:this.widtha,x:this.X,y:this.Y});



    this.Light = this.Data.getValueLight();
    this.temp = this.Data.getValue();
    this.maxtemp = this.Data.getValueMaxTemp();
    this.minhum = this.Data.getValueMinHum();
    this.maxhum = this.Data.getValueMaxHum();
    this.minCo2 = this.Data.getValueMinCo2();
    this.maxCo2 = this.Data.getValueMaxCo2();

    for(let i = 0; i <this.Light.length;i++)
    {
     this.Light2[i] = parseInt(this.Light[i]);

     this.temp2[i] = parseInt(this.temp[i]);
     this.maxtemp2[i] = parseInt(this.maxtemp[i]);

     this.minhum2[i]=parseInt(this.minhum[i]);
     this.maxhum2[i]=parseInt(this.maxhum[i]);

     this.minCo22[i]=parseInt(this.minCo2[i]);
     this.maxCo22[i]=parseInt(this.maxCo2[i]);

    } 
   
    console.log(this.Light2);
    console.log(this.temp2);
    console.log("maxtemp"+this.maxtemp2);
    console.log("maxHum"+this.maxhum2);
    console.log("minHum"+this.minhum2);
    console.log("maxCo2"+this.maxCo22);
    console.log("minCo2"+this.minCo22);
  }

  DeleteRoom()
  {
    this.Room = "room" + this.IDD;
    this.RoomItemsRef.remove(this.Room);
  }
  test(test:String)
  {
    this.router.navigateByUrl('/roominfo/'+test);
    console.log(test);
  }
}

 class Room{
   value : number;
   constructor(Value:number)
   {
     this.value = Value;
   }
   getValue()
   {
     return this.value;
   }
 }
