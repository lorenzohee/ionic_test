import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service'

@Component({
  selector: 'app-mine',
  templateUrl: './mine.page.html',
  styleUrls: ['./mine.page.scss'],
})
export class MinePage implements OnInit {

  constructor(
  	private service: UserService) { }

  ngOnInit() {
  	this.getCurrentUser();
  }

  getCurrentUser() {
  	this.service.getCurrentUser().subscribe(res=>{
  		this.user = res
  	})
  }

}
