import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { Message } from '../models/message.interfaace';

//fireBase a la bd
 

@Injectable({
  providedIn: 'root'
})
export class DataDbService {
  private contactColletion: AngularFirestoreCollection<Message>;

  constructor(private afs : AngularFirestore) { 
    this.contactColletion=afs.collection<any>('contact')
  }

  saveMessage(newContact: any):void{
    this.contactColletion.add(newContact);

  }
}
