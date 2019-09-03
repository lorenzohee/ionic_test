import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { UserService } from '../service/user.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public onLoginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private userService: UserService
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    let token = this.storageService.getVal('token');
    if(token){
      let backurl = this.storageService.getVal('backurl');
      if(!backurl){
        this.storageService.remove('backurl');
        backurl = '/home'
      }
      this.navCtrl.navigateRoot(<string>backurl);
      return false;
    }
    this.onLoginForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter you email address to send a reset link password.',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: 'Email was sended successfully.',
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  // // //
  goToRegister() {
    this.navCtrl.navigateRoot('/register');
  }

  goToHome() {
    this.userService.login(this.onLoginForm.value).subscribe(
      result => {
        if(result.token){
          this.storageService.setVal('token', result.token);
          let backurl = this.storageService.getVal('backurl');
          if(!backurl){
            this.storageService.remove('backurl');
            backurl = '/tabs/mine'
          }
          this.navCtrl.navigateRoot(<string>backurl);
        }else{
          this.showLoginFailToast(null)
        }
      },
      error => {
        this.storageService.setVal('token', 'eyJhbGciOiJSUzI1NiJ9.eyJ1dWlkIjoiNDY1YjVlNjQtYzM3Ny00ZDZlLTg3NGUtNjM2YWY1YmQzOTU1IiwiZW1haWwiOiJ5b25ncWluZ2hlZUAxNjMuY29tIiwid3hfdXNlciI6W119.rDH8TioZ2aFSLHvLxwchVk1Jhzw3WJeiwBQkutL62N8de5RALOZMU0nv_UnOm5i8UmeCguv6amikPyKS7jXv7Lkx4sjZl0cXwJQBOd_Nc2Jh2jobazU4X6ZIeKUdaVA8_cDpVsrQpLDx07Hz4cjOWS_yj34CZEJFVkpbGZFtxeUBjDQgaIysKpVOYa3ehr3Vjl_Lazd9rYKnsMs0HZWQr71h0x9rY3ZNqBCVPtndXFpYXt2zqbqNm1h1-u_jrV0Aga4MO4tKyz7ySx0vNWFNBzgBk3NYbbvLBp3smQ-whwkdYtobCG3HQHvvsgZ-OydByYTa4Y3Qdlcb070y0ygZlg');
        this.navCtrl.navigateRoot('/tabs/mine');
        this.showLoginFailToast(error);
      }
    )
  }

  async showLoginFailToast(str: string){
    const toast = await this.toastCtrl.create({
      message: str || '登录失败，请重试',
      duration: 2000
    })
    toast.present()
  }
}
