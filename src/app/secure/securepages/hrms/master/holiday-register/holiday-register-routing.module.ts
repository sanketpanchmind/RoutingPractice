import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayRegisterComponent } from './holiday-register.component';

const routes: Routes = [{ path: '', component: HolidayRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayRegisterRoutingModule { }
