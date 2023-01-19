import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { MainModule } from './children/main/main.module';
import { LoggerService } from './services/logger.service';
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from './children/about/about.component';
import { NotFoundComponent } from './children/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
