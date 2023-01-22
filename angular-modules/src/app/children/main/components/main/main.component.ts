import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoggerService } from "../../../../services/logger.service";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit{

  constructor(
    private _loggerService: LoggerService,
  ) {
  }

  public ngOnInit(): void {
    this._loggerService.debugLog('MainComponent ngOnInit')
  }

}
