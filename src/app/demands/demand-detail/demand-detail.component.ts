import { Component, OnInit } from '@angular/core';
import { Demand } from '../../models/demand'
import { DemandService } from '../../service/demand.service'
import { FavoriteService } from '../../service/favorite.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-demand-detail',
  templateUrl: './demand-detail.component.html',
  styleUrls: ['./demand-detail.component.scss'],
})
export class DemandDetailComponent implements OnInit {

	demand: Demand;

  constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private service: DemandService,
    private favoriteService: FavoriteService) { }

  ngOnInit() {
  	let id = this.route.snapshot.paramMap.get('id');
  	this.service.getDemandById(parseInt(id)).subscribe(
  		res=>{
  			this.demand = res
  		})
  }

  starDemand() {
    this.favoriteService.starArticle(this.demand.id, 'Demand').subscribe(res=>{
      this.demand.favorite_id = res.id
    })
  }

  unstarDemand() {
    this.favoriteService.unStarArticle(this.demand.favorite_id).subscribe(res=>{
      this.demand.favorite_id = null;
    })
  }
}
