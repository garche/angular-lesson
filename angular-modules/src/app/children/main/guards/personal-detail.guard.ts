import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonDetailComponent } from "../childrens/person-detail/person-detail.component";

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailGuard implements CanDeactivate<PersonDetailComponent> {

  canDeactivate(
    component: PersonDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | boolean | UrlTree {

    return component.isCheckBoxConfirm || nextState.url === '/login' ?
      true
      : (() => {
        alert('Вы должны проставить галочку')

        return false
    })()
  }
}
