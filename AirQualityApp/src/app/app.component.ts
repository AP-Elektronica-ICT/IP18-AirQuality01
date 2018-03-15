import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
