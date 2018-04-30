import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextFeatureEditComponent } from './text-feature/text-feature-edit.component';
import { TextFeatureViewComponent } from './text-feature/text-feature-view.component';

const TEXT_FEATURE: any[] = [
  TextFeatureEditComponent,
  TextFeatureViewComponent
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TEXT_FEATURE],
  exports: [TEXT_FEATURE]
})
export class ContentFeaturesModule { }
