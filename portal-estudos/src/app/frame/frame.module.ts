import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, LateralMenuComponent, LoginComponent],
  exports: [HeaderComponent, FooterComponent, LateralMenuComponent]
})
export class FrameModule { }
