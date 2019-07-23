import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(
	  private route: ActivatedRoute,
	  private router: Router) { }

  ngOnInit() {
  	let id = this.route
  }

  ngAfterContentInit() {
  	console.log(this.route)
  }

  ngOnChanges() {
  	console.log(this.route)
  }

  ionTabsWillChange(){
  	console.log(this.route)
  }

  ionTabsDidChange() {
  	console.log(this.route)
  }
}
