import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header.component";
export const HEADER_TITLE: InjectionToken<string> = new InjectionToken<string>('Тайтл хедера на страницах выбраного модуля')

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ {provide: HEADER_TITLE, useValue: 'Главная' } ]
})
export class HeaderModule {
  // static forRoot(headerTitle: string): ModuleWithProviders<HeaderModule> {
  //   return {
  //     ngModule: HeaderModule,
  //     providers: [
  //       {provide: HEADER_TITLE, useValue: headerTitle }
  //     ]
  //   }
  // }
}
