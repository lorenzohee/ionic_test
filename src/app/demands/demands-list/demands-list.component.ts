import { Component, OnInit } from '@angular/core';
import { DemandService } from 'src/app/service/demand.service';
import { Demand } from 'src/app/models/demand';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-demands-list',
  templateUrl: './demands-list.component.html',
  styleUrls: ['./demands-list.component.scss'],
})
export class DemandsListComponent implements OnInit {

  demands: Demand[]

  constructor(
    private demandService: DemandService
  ) { }

  ngOnInit() {
    this.demandService.getDemandList().subscribe(
      res=>{
        this.demands = res;
      }
    )
  }

}
