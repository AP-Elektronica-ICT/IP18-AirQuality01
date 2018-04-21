import { Component, OnInit,HostBinding } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import { $ } from 'protractor';
//import {FcmPushService} from '../../services/fcm-pushService';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  test:Observable<any[]>;
  test3$:AngularFireList<any>;
  test2:Observable<any[]>;
  message = 5;
constructor(private db: AngularFireDatabase) {
  this.test3$ = this.db.list('/test');
  this.test = this.test3$.snapshotChanges().map(changes => {
    return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
  });
  
  
  
    }
  

  ngOnInit() {
   /* this.msgService.getPermission();
    this.msgService.receiveMessage();
    this.message = this.msgService.currentMessage*/
    

    //this.addItem("iets");
    console.log(this.test3$);
  }

  getRoomDB(listPath): Observable<any[]>
  {
    return this.db.list(listPath).valueChanges();
  }

  addItem( aaa:string)
  {
    this.test3$.push({text:aaa});
  }

}
