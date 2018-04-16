import { Component, OnInit,HostBinding } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
//import {FcmPushService} from '../../services/fcm-pushService';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message;
constructor(/*private msgService: FcmPushService*/) {
 
    }
  

  ngOnInit() {
   /* this.msgService.getPermission();
    this.msgService.receiveMessage();
    this.message = this.msgService.currentMessage*/
  }

}
