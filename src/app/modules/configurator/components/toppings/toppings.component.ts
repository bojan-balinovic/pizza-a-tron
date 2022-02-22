import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Topping from '../../models/topping';
import { ToppingsService } from '../../services/toppings.service';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.css']
})
export class ToppingsComponent implements OnInit {
  toppings: Topping[];
  totalPrice:number;
  @Input() public selectedToppings: Topping[]=new Array<Topping>();
  constructor(
    private toppingsService: ToppingsService
  ) {
    this.toppingsService.toppings.subscribe(topppings => {
      this.toppings = topppings
    });
  }

  ngOnInit(): void {

  }
  addTopping(topping: Topping) {
    if (this.selectedToppings.includes(topping)) {
      let index = this.selectedToppings.indexOf(topping);
      if (index > -1) {
        this.selectedToppings.splice(index, 1); // 2nd parameter means remove one item only
      }
    } else {
      this.selectedToppings.push(topping);
    }
    this.totalPrice=0;
    this.selectedToppings.forEach(s=>{
      this.totalPrice+=s.price;
    })

  }
}
