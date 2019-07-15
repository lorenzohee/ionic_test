import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TechBlogPage } from './tech-blog.page';

import { TechBlogListComponent } from './tech-blog-list/tech-blog-list.component'
import { TechBlogDetailComponent } from './tech-blog-detail/tech-blog-detail.component'

const routes: Routes = [
  {
    path: '',
    component: TechBlogPage,
    children: [
      {
        path: '',
        component: TechBlogListComponent
      }, {
        path: ':id',
        component: TechBlogDetailComponent
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
  declarations: [TechBlogPage, TechBlogListComponent, TechBlogDetailComponent]
})
export class TechBlogPageModule {}
