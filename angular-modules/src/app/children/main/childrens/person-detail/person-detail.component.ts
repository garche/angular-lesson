import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { IPerson } from "../../interfaces/person.interface";
import { ActivatedRoute, Router } from "@angular/router";
import { PersonManagerService } from "../../services/person-manager.service";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PersonDetailComponent {

  public person!: IPerson;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _personService: PersonManagerService,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
  ) {
    const person: IPerson | undefined = this._personService.getPersonById(+this._activatedRoute.snapshot.params['id'])

    if(!person){
      this._router.navigate(['not-found'])

      return;
    }

    this.person = person;
  }
}
