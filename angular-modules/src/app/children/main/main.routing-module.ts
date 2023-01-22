import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { NgModule } from "@angular/core";
import { PersonDetailComponent } from "./childrens/person-detail/person-detail.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: 'person/:id',
      component: PersonDetailComponent
    }]
  },
  // {
  //   path: 'person/:id',
  //   component: PersonDetailComponent
  // }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [],
})
export class MainRoutingModule { }
