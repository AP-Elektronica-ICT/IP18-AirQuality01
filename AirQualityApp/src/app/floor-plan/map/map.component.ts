import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
/* TODO array aanmaken van kamers en colors zodat elke kamer zijn kleur krijgt*/


color= "black"; // default waarde 
//Binnenhalen van Value AirQuality en toewijzen aan Room
//Hieronder nog fictieve waarden

Room1 = new Room(41);

  constructor() { }
/* 
AirQuality value verdelen in 5 groepen(nog fictieve waarden)
  * 0  - 10 ver onder de goede waarde  ==> blauwe kleur
  * 11 - 20 iets onder de goede waarde ==> blauwgroene kleur
  * 21 - 30 op de goede waarde         ==> groene kleur
  * 31 - 40 iets boven de goed waarde  ==> oranje kleur
  * 41 - 50 ver boven de goede waarde  ==> rode kleur
*/
  ngOnInit() {
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
