import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import Topping from '../models/topping';

@Injectable()
export class ToppingsService {
  toppings: Observable<Topping[]>;
  constructor(
    private firestore: AngularFirestore
  ) {
    this.toppings = firestore.collection<Topping>('toppings').valueChanges();
  }

}
