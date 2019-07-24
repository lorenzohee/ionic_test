import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommentComponent } from './comment/comment.component'

@NgModule({
  declarations: [ CommentComponent ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentComponent
  ]
})
export class SharedModule { }
