import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderModalComponent } from 'src/app/modules/order/modals/order-modal.component';
import { PizzaSizesComponent } from '../../components/pizza-sizes/pizza-sizes.component';
import { ToppingsComponent } from '../../components/toppings/toppings.component';
import Order from '../../../order/models/order';
import PizzaSize from '../../models/pizza-size';
import Discount from '../../models/discount';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {
  order: Order = new Order();

  constructor(
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  selectPizzaSize(pizzaSize:PizzaSize){
    this.order.size=pizzaSize;
  }

  addDiscount(discount:Discount){
    this.order.discount=discount;
  }
  
  buyPizza() {
    console.log(this.order.size);
    console.log(this.order);
    if (!this.order.toppings.length) {
      this.snackbar.open(`You haven't selected any topping.`,'OK',{
        duration:2000
      });
      return;
    }

    const dialogRef = this.dialog.open(OrderModalComponent, {
      data: { order: this.order }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
