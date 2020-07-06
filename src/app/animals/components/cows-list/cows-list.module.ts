import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CowsListMinimalComponent } from './cows-list-minimal/cows-list-minimal.component';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [CowsListMinimalComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,

  ],
  exports: [
    CowsListMinimalComponent,
  ]
})
export class CowsListModule { }
