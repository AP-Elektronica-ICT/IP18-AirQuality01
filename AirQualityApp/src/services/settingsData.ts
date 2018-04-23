import { Injectable } from '@angular/core'; 

@Injectable() 
export class settingsData { 
   private myValue; 
   private minTemp = ["5","5","5","5","5","5","5","5"]; 
   private maxTemp = ["25","25","25","25","25","25","25","25"]; 
   private minHum = ["5","5","5","5","5","5","5","5"]; 
   private maxHum = ["25","25","25","25","25","25","25","25"]; 
   private minCo2 = ["450","450","450","450","450","450","450","450"]; 
   private maxCo2 = ["650","650","650","650","650","650","650","650"]; 
   private Light = ["50","50","50","50","50","50","50","50"]; 
    

   constructor() {} 

   setValue(id,temp) { 
       this.myValue = id; 
       this.minTemp[id-1] = temp 
       console.log(id,this.minTemp[id-1]); 
   } 
   setValueMaxTemp(id,maxtemp) 
   { 
    this.maxTemp[id-1] = maxtemp; 
    console.log(id,this.maxTemp[id-1]); 
   } 
   setValueMinHum(id,minHum) 
   { 
       this.minHum[id-1] = minHum; 
       console.log(id,this.minHum[id-1]); 
   } 
   setValueMaxHum(id,maxHum) 
   { 
       this.maxHum[id-1] = maxHum; 
       console.log(id,this.maxHum[id-1]); 
   } 
   setValueMinCo2(id,minCo2) 
   { 
       this.minCo2[id-1] = minCo2; 
       console.log(id,this.minCo2[id-1]); 
   } 
   setValueMaxCo2(id,maxCo2) 
   { 
       this.maxCo2[id-1] = maxCo2; 
       console.log(id,this.maxCo2[id-1]); 
   } 
   setValueLight(id,light) 
   { 
       this.Light[id-1] = light; 
       console.log(id,this.Light[id-1]); 
   } 

   getValue() { 
       return this.minTemp; 
   } 

   getValueLight() 
   { 
       return this.Light; 
   } 

   getValueMaxTemp() 
   { 
       return this.maxTemp; 
   } 
   getValueMinHum() 
   { 
       return this.minHum; 
   } 
   getValueMaxHum() 
   { 
       return this.maxHum; 
   } 
   getValueMinCo2() 
   { 
       return this.minCo2; 
   } 
   getValueMaxCo2() 
   { 
       return this.maxCo2; 
   } 
}