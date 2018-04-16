import { Component, OnInit,HostBinding } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    user: Observable<firebase.User>;
    items: AngularFireList<any[]>;
    itemList: Observable<any[]>;
    msgVal: string;
  
    constructor(public angularFireAuth: AngularFireAuth, public angularFireDatabase: AngularFireDatabase) {
      this.user = angularFireAuth.authState;
      this.items = angularFireDatabase.list('items');
      this.itemList = angularFireDatabase.list('items').valueChanges();
      this.msgVal = '';
    }
  
    login() {
      this.angularFireAuth.auth.signInAnonymously();
      console.log(this.user);
    }
  
    logout() {
      this.angularFireAuth.auth.signOut();
    }
  
    Send(desc: any) {
      const descs = [];
      descs[0] = desc;
      this.items.push(descs);
    }

  ngOnInit() {
  }

}
