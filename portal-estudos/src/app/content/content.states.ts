import { ContentComponent } from './content.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { Ng2StateDeclaration, Transition } from '@uirouter/angular';
import { MyPagesComponent } from './my-pages/my-pages.component';
import { SharedPagesComponent } from './shared-pages/shared-pages.component';
import { PublicPagesComponent } from './public-pages/public-pages.component';
import { RouterStateSnapshot } from '@angular/router/src/router_state';

const views: any =  {
  main_page: { component: MainPageComponent},
  content_page: { component: ContentPageComponent }
}

const resolve = [ { token: 'pageId', deps: [Transition], resolveFn: (params: Transition) => params.params().pageId }];

const urlParams = "/:type/:pageId";
export const CONTENT_STATE: Ng2StateDeclaration = {
  name: 'content',
  url: '/content',
  component: ContentComponent
}

export const MYPAGES_STATE: Ng2StateDeclaration = {
  name: 'content.my_pages',
  url: '/my-pages' + urlParams,
  component: MyPagesComponent,
  resolve: resolve,
  views: views
}

export const SHAREDPAGES_STATE: Ng2StateDeclaration = {
  name: 'content.shared_pages',
  url: '/shared-pages' + urlParams,
  component: SharedPagesComponent,
  resolve: resolve,
  views: views
}

export const PUBLICPAGES_STATE: Ng2StateDeclaration = {
  name: 'content.public_pages',
  url: '/public-pages' + urlParams,
  component: PublicPagesComponent,
  resolve: resolve,
  views: views
}

export const CONTENT_STATES: Ng2StateDeclaration[] = [
  CONTENT_STATE,
  MYPAGES_STATE,
  SHAREDPAGES_STATE,
  PUBLICPAGES_STATE,
];
