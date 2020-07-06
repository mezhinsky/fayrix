import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CowsListPageComponent } from './cows-list-page/cows-list-page.component';


const routes: Routes = [
  { path: '', component: CowsListPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CowsListPageRoutingModule { }
