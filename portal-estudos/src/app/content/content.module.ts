import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';

import { MainPageComponent } from './main-page/main-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { ContentComponent } from './content.component';

import { CONTENT_STATES } from './content.states';
import { MyPagesComponent } from './my-pages/my-pages.component';
import { SharedPagesComponent } from './shared-pages/shared-pages.component';
import { PublicPagesComponent } from './public-pages/public-pages.component';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild({ states: CONTENT_STATES })
  ],
  declarations: [MainPageComponent, ContentPageComponent, ContentComponent, MyPagesComponent, SharedPagesComponent, PublicPagesComponent]
})
export class ContentModule { }
