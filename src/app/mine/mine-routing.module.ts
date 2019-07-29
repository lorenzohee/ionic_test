import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MinePage } from './mine.page';
import { PersonalEditComponent } from './personal-edit/personal-edit.component'
import { TagEditComponent } from './tag-edit/tag-edit.component'
import { FavoriteComponent } from './favorite/favorite.component'
import { FeedbackListComponent } from './feedback-list/feedback-list.component'
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component'
import { FeedbackFormComponent } from './feedback-form/feedback-form.component'

const routes: Routes = [
  {
    path: '',
    component: MinePage
  },
  { path: 'personal-edit', component: PersonalEditComponent },
  { path: 'tag-edit', component: TagEditComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'feedback-list', component: FeedbackListComponent },
  { path: 'feedback-detail', component: FeedbackDetailComponent },
  { path: 'feedback-form', component: FeedbackFormComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MineRoutingModule { }
