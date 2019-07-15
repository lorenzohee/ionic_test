import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

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
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActivityPage, ActivityListComponent, ActivityDetailComponent]
})
export class ActivityPageModule {}
