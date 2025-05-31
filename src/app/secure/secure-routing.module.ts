import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponent } from './secure.component';

const routes: Routes = [
  {
    path: '', component: SecureComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./securepages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'hrms', loadChildren: () => import('./securepages/hrms/hrms.module').then(m => m.HrmsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
