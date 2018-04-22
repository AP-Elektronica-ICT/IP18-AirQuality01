import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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
color= "reds"; // default waarde 
//Binnenhalen van Value AirQuality en toewijzen aan Room
//Hieronder nog fictieve waarden

Room1 = new Room(41);

  constructor(private db:AngularFireDatabase) { }
/* 
AirQuality value verdelen in 5 groepen(nog fictieve waarden)
  * 0  - 10 ver onder de goede waarde  ==> blauwe kleur
  * 11 - 20 iets onder de goede waarde ==> blauwgroene kleur
  * 21 - 30 op de goede waarde         ==> groene kleur
  * 31 - 40 iets boven de goed waarde  ==> oranje kleur
  * 41 - 50 ver boven de goede waarde  ==> rode kleur
*/
  ngOnInit() {
    this.RoomItemsRef = this.db.list('/DrawRoom');
    this.RoomItems = this.RoomItemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });


    

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
