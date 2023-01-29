import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './children/about/about.component';
import { NotFoundComponent } from './children/not-found/not-found.component';
import { LoginComponent } from "./children/login/login.component";
import { LoginGuard } from "./guards/login.guard";

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./children/main/main.module').then((m: any) => m.MainModule),
    canActivate: [LoginGuard]
  },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'main', pathMatch: "full" },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
