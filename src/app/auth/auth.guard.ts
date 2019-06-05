import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private storage: Storage
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;
    console.log('AuthGuard#canactivate');
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    this.storage.get('token').then(result=>{
      if(result){
        this.storage.get('backurl').then(backurl=>{
          if(backurl){
            this.router.navigate([backurl])
            return false;
          }else{
            return true;
          }
        }).catch(()=>{
          return true;
        })
      }else {
        this.router.navigate(['/login'])
        return false;
      }
    }, rej=>{
      this.router.navigate(['/login'])
      return false;
    })
    return true;
  }
}
