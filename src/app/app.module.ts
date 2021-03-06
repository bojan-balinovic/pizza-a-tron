import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';

import { environment } from 'src/environments/environment';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    
  ],
  imports: [

    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
