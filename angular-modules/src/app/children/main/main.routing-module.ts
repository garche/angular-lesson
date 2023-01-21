import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { NgModule } from "@angular/core";
import { PersonDetailComponent } from "./childrens/person-detail/person-detail.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'person/:id',
    component: PersonDetailComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class MainRoutingModule { }
