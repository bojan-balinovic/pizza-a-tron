import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderModalComponent } from './modals/order-modal.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { OrderSuccessfulComponent } from './views/order-successful/order-successful.component';
import { OrderService } from './services/order.service';
import { OrderHistoryComponent } from './views/order-history/order-history.component';


const routes = [
  {
    path: 'order-successful',
    component:OrderSuccessfulComponent
  },
  {
    path:'history',
    component:OrderHistoryComponent
  }
];


@NgModule({
  declarations: [
    OrderModalComponent,
    OrderSuccessfulComponent,
    OrderHistoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    OrderService
  ]
})
export class OrderModule { }
