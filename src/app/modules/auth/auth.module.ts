import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { RegisterComponent } from './views/register/register.component';
const redirectLoggedInToConfigurator = () => redirectLoggedInTo(['configurator']);

const routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToConfigurator }
  },
  {
    path:'register',
    component:RegisterComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToConfigurator }
  }
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    AngularFireAuthModule],
  exports: [RouterModule]
})
export class AuthModule { }
