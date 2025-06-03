import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { SecureLayoutComponent } from './secure-layout/secure-layout.component';
import { SecureHeaderComponent } from './secure-header/secure-header.component';
import { SecureFooterComponent } from './secure-footer/secure-footer.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    SecureComponent,
    SecureLayoutComponent,
    SecureHeaderComponent,
    SecureFooterComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule,
    MatIconModule
  ]
})
export class SecureModule { }
