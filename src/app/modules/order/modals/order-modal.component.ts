import { Component, Inject, OnInit } from '@angular/core';
import Discount from '../../configurator/models/discount';
import Order from '../models/order';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent implements OnInit {
  order:Order;
  discount:Discount=new Discount();
  shippingInformation=this.fb.group({
    streetName:[''],
    city:[''],
    postalCode:[''],
    country:['']
  })
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder,
    private orderService:OrderService,
    private router:Router,
    private dialog:MatDialogRef<OrderModalComponent>
  ) {
    this.order=data.order;
    console.log(this.order);
  }

  ngOnInit(): void {
  }

  finishOrder(){
    console.log(this.shippingInformation.value);
    this.order.shippingInformation=this.shippingInformation.value;
    this.orderService.add(this.order);
    this.router.navigate(['/order','order-successful'])
    this.dialog.close();
  }
}
