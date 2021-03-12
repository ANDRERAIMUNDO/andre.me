import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AppComponent } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    AppComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[HomePage]
})
export class AppModule {}
