import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoggerService } from "../../../../services/logger.service";
import { IPerson } from "../../interfaces/person.interface";
import { PersonManagerService } from "../../services/person-manager.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit{

  public personList: IPerson[]

  constructor(
    private _loggerService: LoggerService,
    private _personService: PersonManagerService,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
  ) {
    this.personList = this._personService.getPersonList();
  }

  public ngOnInit(): void {
    this._loggerService.debugLog('MainComponent ngOnInit')
  }

  public navigateToDetail(id: number): void {
    this._router.navigate(['main', 'person', String(id)])
  }
}
