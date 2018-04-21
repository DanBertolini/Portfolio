import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinesManagerPipe } from './pipes/lines-manager.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LinesManagerPipe],
  exports: [LinesManagerPipe]
})
export class SharedModule { }
