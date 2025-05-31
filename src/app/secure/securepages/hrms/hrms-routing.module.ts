import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrmsComponent } from './hrms.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'holiday' },
  { path: 'holiday', loadChildren: () => import('./holiday-register/holiday-register.module').then(m => m.HolidayRegisterModule) },
  { path: 'leavetype', loadChildren: () => import('./leavetype-register/leavetype-register.module').then(m => m.LeavetypeRegisterModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrmsRoutingModule { }
