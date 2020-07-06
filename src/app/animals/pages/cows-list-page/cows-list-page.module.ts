import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { CowsListPageRoutingModule } from './cows-list-page-routing.module';
import { CowsListPageComponent } from './cows-list-page/cows-list-page.component';

import { AnimalsStoreModule } from '../../animals-store/animals-store.module';
import { AnimalsServiceModule } from '../../services/animals-service/animals-service.module';

import { CowsListModule } from '../../components/cows-list/cows-list.module';
import { CowFormsModule } from '../../components/cow-forms/cow-forms.module';
import { CowDialogComponent } from './cow-dialog/cow-dialog.component';

import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';


@NgModule({
  declarations: [CowsListPageComponent, CowDialogComponent],
  entryComponents: [CowsListPageComponent, CowDialogComponent],
  imports: [
    CommonModule,
    CowsListPageRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,


    AnimalsStoreModule,
    AnimalsServiceModule,
    CowsListModule,
    CowFormsModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class CowsListPageModule { }
