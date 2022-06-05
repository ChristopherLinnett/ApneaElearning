import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService:UserService, private router: Router){}
  /**
   * If the user is not logged in, return false. Otherwise, return true
   * @param {ActivatedRouteSnapshot} route - ActivatedRouteSnapshot - The route that is being
   * activated.
   * @param {RouterStateSnapshot} state - RouterStateSnapshot - The state of the router at the time
   * this guard is run.
   * @returns A boolean value.
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.userService.loggedIn) {
        return false
      }
      return true;
  }
  
}
