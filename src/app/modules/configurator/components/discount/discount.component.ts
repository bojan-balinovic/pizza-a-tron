import { Component, OnInit } from '@angular/core';
import Discount from '../../models/discount';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  discount:Discount=new Discount();

  constructor() { }

  ngOnInit(): void {

  }
  getDiscount(){
    if(this.discount.code){
      
    }
  }

}
