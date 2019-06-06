import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandsPage } from './demands.page';
import { RouterModule, Routes } from '@angular/router';
import { DemandsListComponent } from './demands-list/demands-list.component';
import { DemandDetailComponent } from './demand-detail/demand-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DemandsPage,
    children: [
      {
        path: '',
        component: DemandsListComponent
      }, {
        path: ':id',
        component: DemandDetailComponent
      }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DemandsRoutingModule { }
