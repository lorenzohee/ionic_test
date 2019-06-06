import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandsPage } from './demands.page';
import { DemandsRoutingModule } from './demands-routing.module';
import { DemandsListComponent } from './demands-list/demands-list.component';
import { DemandDetailComponent } from './demand-detail/demand-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandsRoutingModule
  ],
  declarations: [DemandsPage, DemandsListComponent, DemandDetailComponent]
})
export class DemandsPageModule {}
