import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public get isRoutingProcess$(): Observable<boolean> {
    return this._isRoutingProcess$.asObservable();
  }

  private _isRoutingProcess$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    private _router: Router
  ) {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this._isRoutingProcess$.next(true)
      }

      if (event instanceof NavigationEnd) {
        this._isRoutingProcess$.next(false)
      }
    });
  }
}
