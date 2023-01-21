import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../modules/header/header.module';
import { MainRoutingModule } from "./main.routing-module";
import { PersonDetailComponent } from './childrens/person-detail/person-detail.component';
import { PersonService } from "./services/person.service";

@NgModule({
  declarations: [
    MainComponent,
    PersonDetailComponent
  ],
  exports: [MainComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MainRoutingModule,
  ],
  providers: [PersonService],
})
export class MainModule { }
