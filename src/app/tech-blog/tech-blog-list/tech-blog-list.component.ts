import { Component, OnInit } from '@angular/core';
import { TechBlogService } from 'src/app/service/tech-blog.service';
import { TechBlog } from 'src/app/models/tech-blog';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tech-blog-list',
  templateUrl: './tech-blog-list.component.html',
  styleUrls: ['./tech-blog-list.component.scss'],
})
export class TechBlogListComponent implements OnInit {

	techBlogs: TechBlog[]

  constructor(private service: TechBlogService) { }

  ngOnInit() {
  	this.service.getTechBlogs().subscribe(
  		res=>{
  			this.techBlogs = res
  		})
  }

}
