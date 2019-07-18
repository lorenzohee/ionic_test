import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/service/activity.service';
import { Activity } from 'src/app/models/activity';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss'],
})
export class ActivityListComponent implements OnInit {

	activities: Activity[]

  constructor(private service: ActivityService) { }

  ngOnInit() {
  	this.service.getActivities().subscribe(
  		res=>{
  			this.activities = res
  		})
  }

}
