import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { HomeComponent } from './home/home.component';

const STATES = [
  { name: 'home', url: '/', component: HomeComponent },
  { name: 'hello', url: '/hello', component: HomeComponent },
  { name: 'hellos', url: '/hellos', component: HomeComponent },
  { name: 'hellow', url: '/hellow', component: HomeComponent },
];

@NgModule({
  imports: [UIRouterModule.forRoot({ states: STATES })],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }
