import { Component, Inject, OnInit } from '@angular/core';
import Discount from '../../configurator/models/discount';
import Order from '../../configurator/models/order';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-order',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent implements OnInit {
  order:Order;
  discount:Discount=new Discount();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.order=data.order;
    console.log(this.order);
  }

  ngOnInit(): void {
  }
  finishOrder(){

  }
}
