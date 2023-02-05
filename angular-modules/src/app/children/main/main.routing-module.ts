import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { NgModule } from "@angular/core";
import { PersonDetailComponent } from "./childrens/person-detail/person-detail.component";
import { PersonalDetailGuard } from "./guards/personal-detail.guard";
import { RandomDogComponent } from "./childrens/random-dog/random-dog.component";
import { GetDogResolver } from "./childrens/random-dog/resolvers/get-dog.resolver";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'person/:id',
    component: PersonDetailComponent,
    canDeactivate: [PersonalDetailGuard]
  },
  {
    path: 'dog',
    component: RandomDogComponent,
    resolve: {
      imageSrc: GetDogResolver
    }
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [],
})
export class MainRoutingModule { }
