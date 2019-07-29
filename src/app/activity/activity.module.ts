import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module'

import { ActivityPage } from './activity.page';

import { ActivityListComponent } from './activity-list/activity-list.component'
import { ActivityDetailComponent } from './activity-detail/activity-detail.component'

const routes: Routes = [
  {
    path: '',
    component: ActivityPage,
    children: [
      {
        path: '',
        component: ActivityListComponent
      }, {
        path: ':id',
        component: ActivityDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActivityPage, ActivityListComponent, ActivityDetailComponent]
})
export class ActivityPageModule {}
