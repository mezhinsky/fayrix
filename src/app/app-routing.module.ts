import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicLayoutComponent } from '../app/layout/components/layout/basic-layout/basic-layout.component';


const routes: Routes = [
  { path: '', redirectTo: 'animals/cows', pathMatch: 'full'  },
  { path: '**', redirectTo: 'animals/cows', },


  {
    path: 'animals', component: BasicLayoutComponent, children: [
      {
        path: 'cows',
        loadChildren: () =>
          import('./animals/pages/cows-list-page/cows-list-page.module').then(
            m => m.CowsListPageModule
          ),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
