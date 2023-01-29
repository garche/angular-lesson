import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { USER_NAME_TOKEN } from "../storage-tokens/storage-tokens";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private _router: Router,
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | boolean | UrlTree {
    return localStorage.getItem(USER_NAME_TOKEN) ?
      true : (() => {
        alert('войдите в аккаунт');
        return this._router.createUrlTree([ 'login' ]);
      })()
  }
}
