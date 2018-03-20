import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, LateralMenuComponent],
  exports: [HeaderComponent, FooterComponent, LateralMenuComponent]
})
export class FrameModule { }
