import { MainComponent } from "./main.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "../../modules/header/header.module";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
  ],
  providers: [],
})
export class MainModule { }
