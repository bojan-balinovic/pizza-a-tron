import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfiguratorComponent } from './views/configurator/configurator.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { AuthModule } from '@angular/fire/auth';
import { SharedModule } from '../shared/shared.module';
import { ToppingsComponent } from './components/toppings/toppings.component';
import { ToppingsService } from './services/toppings.service';
import { PizzaSizesComponent } from './components/pizza-sizes/pizza-sizes.component';
import { PizzaSizesService } from './services/pizza-sizes.service';
import { DiscountComponent } from './components/discount/discount.component';


const routes = [

  {
    path: '',
    component: ConfiguratorComponent,
    canActivate: [AngularFireAuthGuard]
  },

];


@NgModule({
  declarations: [
    ConfiguratorComponent,
    ToppingsComponent,
    PizzaSizesComponent,
    DiscountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [
    ToppingsService,
    PizzaSizesService
  ]
})
export class ConfiguratorModule { }
