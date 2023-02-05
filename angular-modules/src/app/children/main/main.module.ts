import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../modules/header/header.module';
import { MainRoutingModule } from "./main.routing-module";
import { PersonDetailComponent } from './childrens/person-detail/person-detail.component';
import { PersonManagerService } from "./services/person-manager.service";
import { RandomDogComponent } from './childrens/random-dog/random-dog.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    MainComponent,
    PersonDetailComponent,
    RandomDogComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    HttpClientModule,
    MainRoutingModule,
  ],
  providers: [PersonManagerService],
})
export class MainModule { }
