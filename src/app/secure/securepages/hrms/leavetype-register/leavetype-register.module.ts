import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavetypeRegisterRoutingModule } from './leavetype-register-routing.module';
import { LeavetypeRegisterComponent } from './leavetype-register.component';


@NgModule({
  declarations: [
    LeavetypeRegisterComponent
  ],
  imports: [
    CommonModule,
    LeavetypeRegisterRoutingModule
  ]
})
export class LeavetypeRegisterModule { }
