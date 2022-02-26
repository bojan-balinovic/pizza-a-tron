import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
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
    private discountService: DiscountService
  ) { }

  ngOnInit(): void {


  }
  onSubmit() {
    if (this.discount.code) {
      this.discountService.discounts.subscribe((discounts:Discount[])=> {
        discounts.forEach(d => {
          if (d.code == this.discount.code) {
            this.addDiscount.emit(d);
          }
        })
      })
    }
  }

}
