import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';

import { MainPageComponent } from './main-page/main-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { ContentComponent } from './content.component';

import { CONTENT_STATES } from './content.states';
import { SharedModule } from '../shared/shared.module';
import { EditContentComponent } from './edit-content/edit-content.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UIRouterModule.forChild({ states: CONTENT_STATES })
  ],
  declarations: [MainPageComponent, ContentPageComponent, ContentComponent, EditContentComponent]
})
export class ContentModule { }
