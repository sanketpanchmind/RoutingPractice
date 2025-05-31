import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavetypeRegisterComponent } from './leavetype-register.component';

const routes: Routes = [{ path: '', component: LeavetypeRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavetypeRegisterRoutingModule { }
