import { Component, OnInit } from '@angular/core';
import { TechBlogService } from 'src/app/service/tech-blog.service';
import { TechBlog } from 'src/app/models/tech-blog';
import { FavoriteService } from '../../service/favorite.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tech-blog-detail',
  templateUrl: './tech-blog-detail.component.html',
  styleUrls: ['./tech-blog-detail.component.scss'],
})
export class TechBlogDetailComponent implements OnInit {

	techBlog: TechBlog

  constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private service: TechBlogService,
    private favoriteService: FavoriteService) { }

  ngOnInit() {
  	let id = this.route.snapshot.paramMap.get('id');
  	this.service.getTechBlogById(parseInt(id)).subscribe(
  		res=>{
  			this.techBlog = res
  		}
  	)
  }

  starDemand() {
    this.favoriteService.starArticle(this.techBlog.id, 'TechBlog').subscribe(res=>{
      this.techBlog.favorite_id = res.id
    })
  }

  unstarDemand() {
    this.favoriteService.unStarArticle(this.techBlog.favorite_id).subscribe(res=>{
      this.techBlog.favorite_id = null;
    })
  }
}
