import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../modules/header/header.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
]

@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [MainComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HeaderModule,
  ],
  providers: [],
})
export class MainModule { }
