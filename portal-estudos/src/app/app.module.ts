import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { FrameModule } from './frame/frame.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule,
    AppRoutingModule,
    HomeModule,
    FrameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
