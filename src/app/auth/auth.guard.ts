import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, CanLoad, Route } from '@angular/router';
import { StorageService } from '../service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private storageService: StorageService
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  canLoad(route: Route): boolean {
    let url = `${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    let token = this.storageService.getVal('token');
    if(token){
      return true;
    }else{
      this.storageService.setVal('backurl', url);
      this.router.navigate(['/login'])
      return false;
    }
  }
}
