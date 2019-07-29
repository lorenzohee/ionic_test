import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module'

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
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TechBlogPage, TechBlogListComponent, TechBlogDetailComponent]
})
export class TechBlogPageModule {}
