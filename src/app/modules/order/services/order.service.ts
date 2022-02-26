import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import Order from '../models/order';

@Injectable()
export class OrderService {
  public orders: Observable<Order[]>;
  private _orders:any;
  constructor(
    private firestore: AngularFirestore
  ) {
    this._orders=firestore.collection<Order>('orders');
    this.orders= this._orders.valueChanges();
  }
  public add(order:Order){
      this._orders.add({...order});
  }
}
