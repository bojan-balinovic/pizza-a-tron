import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderModalComponent } from './modals/order-modal.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { OrderSuccessfulComponent } from './views/order-successful/order-successful.component';


const routes = [
  {
    path: 'order-successful',
    component:OrderSuccessfulComponent
  }
];


@NgModule({
  declarations: [
    OrderModalComponent,
    OrderSuccessfulComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule { }
