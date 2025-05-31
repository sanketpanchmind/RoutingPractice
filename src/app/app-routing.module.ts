import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'public' },
  { path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'register', loadChildren: () => import('./public/pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./public/pages/login/login.module').then(m => m.LoginModule) },
  { path: 'secure', loadChildren: () => import('./secure/secure.module').then(m => m.SecureModule) },
  { path: 'hrms', loadChildren: () => import('./secure/securepages/hrms/hrms.module').then(m => m.HrmsModule) },
  { path: 'holiday-register', loadChildren: () => import('./secure/securepages/hrms/holiday-register/holiday-register.module').then(m => m.HolidayRegisterModule) },
  { path: 'leavetype-register', loadChildren: () => import('./secure/securepages/hrms/leavetype-register/leavetype-register.module').then(m => m.LeavetypeRegisterModule) },
  // { path: 'home', loadChildren: () => import('./public/pages/home/home.module').then(m => m.HomeModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
