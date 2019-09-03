import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TabsService } from './service/tabs.service'
import { StorageService } from './service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private storateService: StorageService,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public tabs: TabsService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goToEditProgile() {
    console.log('goToEditProgile')
  }

  logout() {
    console.log('logout!');
    this.storateService.clear();
    this.navCtrl.navigateRoot('/login');
  }
}
