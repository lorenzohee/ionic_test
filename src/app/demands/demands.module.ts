import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'

import { DemandsPage } from './demands.page';
import { DemandsRoutingModule } from './demands-routing.module';
import { DemandsListComponent } from './demands-list/demands-list.component';
import { DemandDetailComponent } from './demand-detail/demand-detail.component';


@NgModule({
  imports: [
    SharedModule,
    DemandsRoutingModule
  ],
  declarations: [DemandsPage, DemandsListComponent, DemandDetailComponent]
})
export class DemandsPageModule {}
