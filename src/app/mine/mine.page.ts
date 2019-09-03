import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service'
import { User } from '../models/user'
import { StorageService } from '../service/storage.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.page.html',
  styleUrls: ['./mine.page.scss'],
})
export class MinePage implements OnInit {

  user: User;

  constructor(
    private service: UserService,
    public navCtrl: NavController,
    private storateService: StorageService) { }

  ngOnInit() {
  	this.getCurrentUser();
  }

  getCurrentUser() {
  	this.service.getCurrentUser().subscribe(res=>{
  		this.user = res
  	})
  }

  logout() {
    console.log('logout!');
    this.storateService.clear();
    this.navCtrl.navigateRoot('/login');
  }

}
