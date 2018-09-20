import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';

import { Directory } from '../models/directory';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable()
export class DirectoryService {
  directoryCollection: AngularFirestoreCollection<Directory>;
  //nombre de la colección en firebase
  registros: Observable<Directory[]>;
  directoryDoc: AngularFirestoreDocument<Directory>;

  constructor(public afs:AngularFirestore) {
    this.directoryCollection = this.afs.collection('registros');
    this.registros = this.directoryCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Directory;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getDirectory() {
    return this.registros; 
  }

  addRegistro(directory: Directory) {
    this.directoryCollection.add(directory);
  }

  deleteRegistro(directory: Directory) {
    this.directoryDoc = this.afs.doc(`registros/${directory.id}`);
    this.directoryDoc.delete();
  }

  updateRegistro(directory: Directory) {
    this.directoryDoc = this.afs.doc(`registros/${directory.id}`);
    this.directoryDoc.update(directory);
  }


}