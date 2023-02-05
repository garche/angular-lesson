import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetDogResolver implements Resolve<string> {

  constructor(
    private _httpService: HttpClient
  ) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    return this._httpService.get<{message: string}>('https://dog.ceo/api/breeds/image/random')
      .pipe(
        map((value: {message: string}) => value.message)
      )
  }
}
