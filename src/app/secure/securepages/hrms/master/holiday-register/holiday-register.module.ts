import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayRegisterRoutingModule } from './holiday-register-routing.module';
import { HolidayRegisterComponent } from './holiday-register.component';


@NgModule({
  declarations: [
    HolidayRegisterComponent
  ],
  imports: [
    CommonModule,
    HolidayRegisterRoutingModule
  ]
})
export class HolidayRegisterModule { }
