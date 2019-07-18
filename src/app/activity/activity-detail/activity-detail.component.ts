import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/service/activity.service';
import { Activity } from 'src/app/models/activity';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss'],
})
export class ActivityDetailComponent implements OnInit {

	activity: Activity

  constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private service: ActivityService) { }

  ngOnInit() {
  	let id = this.route.snapshot.paramMap.get('id');
  	this.service.getActivityById(parseInt(id)).subscribe(
  		res=>{
  			this.activity = res
  		}
  	)
  }

}
