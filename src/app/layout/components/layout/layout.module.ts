import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';

import { RouterModule } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [BasicLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
  ]
})
export class LayoutModule { }
