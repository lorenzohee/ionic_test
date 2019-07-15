import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [{
  path: '',
  component: TabsPage,
  children: [
    {
      path: 'demands',
      children: [
        {
          path: '',
          loadChildren: '../demands/demands.module#DemandsPageModule'
        }
      ]
    },{
      path: 'weather',
      loadChildren: '../weather/weather.module#WeatherPageModule'
    },{
      path: 'speakers',
      loadChildren: '../chat/chat.module#ChatPageModule'
    },{
      path: 'mine',
      loadChildren: '../mine/mine.module#MinePageModule'
    },
    { path: 'activity', loadChildren: '../activity/activity.module#ActivityPageModule' },
    { path: 'tech-blog', loadChildren: '../tech-blog/tech-blog.module#TechBlogPageModule' },
  ]
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
