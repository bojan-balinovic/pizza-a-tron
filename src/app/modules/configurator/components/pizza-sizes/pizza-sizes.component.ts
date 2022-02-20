import { Component, OnInit } from '@angular/core';
import PizzaSize from '../../models/pizza-size';
import { PizzaSizesService } from '../../services/pizza-sizes.service';

@Component({
  selector: 'app-pizza-sizes',
  templateUrl: './pizza-sizes.component.html',
  styleUrls: ['./pizza-sizes.component.css']
})
export class PizzaSizesComponent implements OnInit {
  pizzaSizes: PizzaSize[];
  selectedPizzaSize: PizzaSize;
  constructor(private pizzaSizeService: PizzaSizesService) {
    this.pizzaSizeService.pizzaSizes.subscribe(pizzaSizes => {
      this.pizzaSizes = pizzaSizes;
    });
  }

  async ngOnInit() {

  }

  selectPizzaSize(pizzaSize: PizzaSize) {
    this.selectedPizzaSize = pizzaSize;
  }
}
