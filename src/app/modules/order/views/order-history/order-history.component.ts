import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import Order from '../../models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  dataSource: MatTableDataSource<Order> = new MatTableDataSource<Order>();
  displayedColumns: string[] = ['size', 'toppings', 'discount', 'country', 'city', 'postalCode', 'streetName']

  constructor(
    private orderService: OrderService
  ) {
  }
  ngOnInit() {
   
  }

  ngAfterViewInit(): void {
    this.orderService.get().subscribe(orders => {
      this.dataSource = new MatTableDataSource<Order>(orders);
    });
  }

}
