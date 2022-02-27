import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Topping from '../../models/topping';
import { ToppingsService } from '../../services/toppings.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.css']
})
export class ToppingsComponent implements OnInit {
  toppings: Topping[];
  totalPrice:number;
  loading:boolean=true;

  @Input() public selectedToppings: Topping[]=new Array<Topping>();

  constructor(
    private toppingsService: ToppingsService,
    private spinner:NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
    this.spinner.show();
    this.toppingsService.toppings.subscribe(topppings => {
      this.toppings = topppings;
      this.spinner.hide();
      this.loading=false;
    });
  }

  addTopping(topping: Topping) {
    if (this.selectedToppings.includes(topping)) {
      let index = this.selectedToppings.indexOf(topping);
      if (index > -1) {
        this.selectedToppings.splice(index, 1);
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
