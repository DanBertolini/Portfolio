import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { FrameModule } from './frame/frame.module';
import { SharedModule } from './shared/shared.module';

import { APP_STATES } from './app.states';
import { NavigationService } from './services/navigation.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    UIRouterModule.forRoot({ states: APP_STATES, otherwise: { state: 'home' } }),
    HomeModule,
    FrameModule
  ],
  providers: [
    NavigationService,
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
