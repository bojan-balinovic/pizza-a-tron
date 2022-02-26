import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  constructor(private pizzaSizeService: PizzaSizesService) {
    this.pizzaSizeService.pizzaSizes.subscribe(pizzaSizes => {
      this.pizzaSizes = pizzaSizes;
    });
  }

  async ngOnInit() {

  }
  select(pizzaSize:PizzaSize){
    this.selectedPizzaSize=pizzaSize;
    this.selectPizzaSize.emit(pizzaSize);
  }

}
