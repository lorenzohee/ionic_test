import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinePage } from './mine.page';
import { MineRoutingModule } from './mine-routing.module';

import { PersonalEditComponent } from './personal-edit/personal-edit.component'
import { TagEditComponent } from './tag-edit/tag-edit.component'
import { FavoriteComponent } from './favorite/favorite.component'
import { FeedbackListComponent } from './feedback-list/feedback-list.component'
import { FeedbackDetailComponent } from './feedback-detail/feedback-detail.component'
import { FeedbackFormComponent } from './feedback-form/feedback-form.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MineRoutingModule,
  ],
  declarations: [MinePage, PersonalEditComponent, TagEditComponent, FavoriteComponent, FeedbackListComponent, FeedbackDetailComponent, FeedbackFormComponent]
})
export class MinePageModule {}
