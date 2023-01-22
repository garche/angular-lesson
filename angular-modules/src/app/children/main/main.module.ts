import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../modules/header/header.module';
import { MainRoutingModule } from "./main.routing-module";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MainRoutingModule,
  ],
  providers: [],
})
export class MainModule { }
