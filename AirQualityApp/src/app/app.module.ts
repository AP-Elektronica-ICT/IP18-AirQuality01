import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { FloorPlanComponent } from './floor-plan/floor-plan.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { RoomInformationComponent } from './room-information/room-information.component';
import { GraphComponent } from './room-information/graph/graph.component';
import { DiagramComponent } from './room-information/diagram/diagram.component';
import { TableComponent } from './room-information/table/table.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCSH_j3_2VwM0OhlWDPStBJvo3QpAXog50",
  authDomain: "airqualityapp-1e114.firebaseapp.com",
  databaseURL: "https://airqualityapp-1e114.firebaseio.com",
  projectId: "airqualityapp-1e114",
  storageBucket: "airqualityapp-1e114.appspot.com",
  messagingSenderId: "1094635221055"
}

@NgModule({
  declarations: [
    AppComponent,
    FloorPlanComponent,
    NavBarComponent,
    HomeComponent,
    RoomInformationComponent,
    GraphComponent,
    DiagramComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    ChartsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'floorplan', component: FloorPlanComponent},
      { path: 'roominfo', component: RoomInformationComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ], { useHash: true }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})

export class AppModule { }
