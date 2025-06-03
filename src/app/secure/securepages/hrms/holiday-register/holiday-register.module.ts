import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayRegisterRoutingModule } from './holiday-register-routing.module';
import { HolidayRegisterComponent } from './holiday-register.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    HolidayRegisterComponent
  ],
  imports: [
    CommonModule,
    HolidayRegisterRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatTooltipModule,
    MatRadioModule,
    HttpClientModule,
    MatTableModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatDatepickerModule,MatNativeDateModule
  ]
})
export class HolidayRegisterModule { }
