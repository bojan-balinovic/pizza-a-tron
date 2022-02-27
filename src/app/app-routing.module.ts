import { NgModule } from '@angular/core';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'configurator',
    loadChildren: () => import('./modules/configurator/configurator.module').then(m => m.ConfiguratorModule),
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'order',
    loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule),
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: '**',
    component: ErrorPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
