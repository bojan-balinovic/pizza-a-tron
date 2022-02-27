import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { getAuth } from 'firebase/auth';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import Order from '../models/order';

@Injectable()
export class OrderService {
  private _orders: AngularFirestoreCollection<Order>;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService,
  ) {
    this._orders = firestore.collection<Order>('orders', o => {
      return o.where('userId', '==', this.authService.userData.currentUser?.uid);
    });
  }

  get(): Observable<Order[]> {
    return this._orders.valueChanges();
  }

  add(order: Order) {
    order.userId = this.authService.userData.currentUser?this.authService.userData.currentUser.uid:'';
    let data={...order} as any;
    data.total=order.total;
    this._orders.add(data);
  }
}
