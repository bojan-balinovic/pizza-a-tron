import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Discount from '../../models/discount';
import { DiscountService } from '../../services/discount.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  discount: Discount = new Discount();
  @Output() addDiscount: EventEmitter<Discount> = new EventEmitter<Discount>();
  constructor(
    private discountService: DiscountService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    if (this.discount.code) {
      this.discountService.get(this.discount.code).subscribe((discounts: Discount[]) => {
        if (discounts.length == 0) {
          this.snackbar.open('Discount not found.', 'OK', { duration: 2000 });
        } else {
          discounts.forEach(d => {
            if (d.code == this.discount.code) {
              this.snackbar.open('Discount added.', 'OK', { duration: 2000 });
              this.addDiscount.emit(d);
            }
          })
        }
      })
    }
  }

}
