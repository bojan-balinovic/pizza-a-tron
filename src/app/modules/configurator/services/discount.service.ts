import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import Discount from '../models/discount';


@Injectable()
export class DiscountService {
    discounts: Observable<Discount[]>;
    private _discounts:AngularFirestoreCollection<Discount>;
    constructor(
        private firestore: AngularFirestore
    ) {
        this._discounts = firestore.collection<Discount>('discounts')
        this.discounts = this._discounts.valueChanges();
    }
}
