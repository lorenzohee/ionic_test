import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../service/favorite.service'
import { Favorite } from '../../models/favorite'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {

	favorites: Favorite[]

  constructor(private service: FavoriteService) { }

  ngOnInit() {
  	this.getFavoriteList();
  }

  getFavoriteList() {
  	this.service.getFavoriteList().subscribe(res=>{
  		this.favorites = res
  	})
  }

}
