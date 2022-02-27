import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import PizzaSize from '../../models/pizza-size';
import { PizzaSizesService } from '../../services/pizza-sizes.service';

@Component({
  selector: 'app-pizza-sizes',
  templateUrl: './pizza-sizes.component.html',
  styleUrls: ['./pizza-sizes.component.css']
})
export class PizzaSizesComponent implements OnInit {
  pizzaSizes: PizzaSize[];
  public selectedPizzaSize:PizzaSize;
  @Output() selectPizzaSize:EventEmitter<PizzaSize>=new EventEmitter<PizzaSize>()
  loading:boolean=true;

  constructor(
    private pizzaSizeService: PizzaSizesService,
    private spinner:NgxSpinnerService
    ) {
  }

  ngOnInit() {
    this.spinner.show();
    this.pizzaSizeService.pizzaSizes.subscribe(pizzaSizes => {
      this.pizzaSizes = pizzaSizes;
      this.loading=false;
    });
  }

  select(pizzaSize:PizzaSize){
    this.selectedPizzaSize=pizzaSize;
    this.selectPizzaSize.emit(pizzaSize);
  }

}
