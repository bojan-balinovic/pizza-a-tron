import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import PizzaSize from '../models/pizza-size';

@Injectable()
export class PizzaSizesService {
  pizzaSizes: Observable<PizzaSize[]>;
  constructor(
    private firestore: AngularFirestore
  ) {
    this.pizzaSizes = firestore.collection<PizzaSize>('sizes').valueChanges();
  }

}
