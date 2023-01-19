import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'my-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  public get title(): string {
    return 'Главная';
  }
}
