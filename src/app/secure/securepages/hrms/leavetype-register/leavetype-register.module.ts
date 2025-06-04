import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavetypeRegisterRoutingModule } from './leavetype-register-routing.module';
import { LeavetypeRegisterComponent } from './leavetype-register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


@NgModule({
  declarations: [
    LeavetypeRegisterComponent
  ],
  imports: [
    CommonModule,
    LeavetypeRegisterRoutingModule,
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
        MatDatepickerModule,MatNativeDateModule,
        NgxMatSelectSearchModule
        
  ]
})
export class LeavetypeRegisterModule { }
