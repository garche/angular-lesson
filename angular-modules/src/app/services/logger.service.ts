import { Injectable, isDevMode, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription, tap } from 'rxjs';

@Injectable()
export class LoggerService implements OnDestroy {

  private _intervalSubscription: Subscription

  constructor() {
    this._intervalSubscription = this.startTimeLog()
      .subscribe();
  }

  public ngOnDestroy(): void {
    this._intervalSubscription.unsubscribe();
  }

  public debugLog(message: string): void {
    if(!isDevMode()) {
      return;
    }

    console.log(message)
  }

  private startTimeLog(): Observable<number> {
    return interval(5000)
      .pipe(
        tap(() => this.debugLog('Вы слишком долго тут находитесь'))
      )
  }
}
