import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './children/about/about.component';
import { NotFoundComponent } from './children/not-found/not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./children/main/main.module').then((m: any) => m.MainModule) },
  { path: 'main', redirectTo: '/' },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
