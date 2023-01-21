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
})
export class HeaderModule {
}
