import { Component } from '@angular/core';
import { map, Observable } from "rxjs";
import { ActivatedRoute, Data } from "@angular/router";

@Component({
  selector: 'app-random-dog',
  templateUrl: './random-dog.component.html',
  styleUrls: ['./random-dog.component.css']
})
export class RandomDogComponent {
  public src$: Observable<string> = this._activatedRoute.data
    .pipe(
      map((data: Data) => data['imageSrc']),
    );
  constructor(
    private _activatedRoute: ActivatedRoute

  ){

  }
}
