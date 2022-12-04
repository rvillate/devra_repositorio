import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio';
  /*todo = this.store.collection('todo').valueChanges({ idField: 'id' }) as Observable<Task[]>;
  inProgress = this.store.collection('inProgress').valueChanges({ idField: 'id' }) as Observable<Task[]>;
  done = this.store.collection('done').valueChanges({ idField: 'id' }) as Observable<Task[]>;*/
  constructor(private router:Router, private store: AngularFirestore){}
}
 