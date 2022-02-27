import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { DiscountService } from './services/discount.service';
import { DiscountComponent } from './components/discount/discount.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    NavbarComponent,
    DiscountComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatDialogModule,
    MatTableModule,
    RouterModule,
    NgxSpinnerModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    ReactiveFormsModule,
    NavbarComponent,
    AngularFirestoreModule,
    MatSnackBarModule,
    RouterModule,
    DiscountComponent,
    NgxSpinnerModule
  ],
  providers: [AuthService,DiscountService],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class SharedModule { }
