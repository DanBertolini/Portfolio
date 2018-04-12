import { ContentComponent } from './content.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { MyPagesComponent } from './my-pages/my-pages.component';
import { SharedPagesComponent } from './shared-pages/shared-pages.component';
import { PublicPagesComponent } from './public-pages/public-pages.component';

export const CONTENT_STATE = {
  name: 'content',
  url: '/content',
  component: ContentComponent
}

export const MYPAGES_STATE = {
  name: 'content.my_pages',
  url: '/my-pages',
  component: MyPagesComponent,
  views: {
    main_page: MainPageComponent,
    content_page: ContentPageComponent
  }
}

export const SHAREDPAGES_STATE = {
  name: 'content.shared_pages',
  url: '/shared-pages',
  component: SharedPagesComponent,
  views: {
    'main_page': MainPageComponent,
    'content_page': ContentPageComponent
  }
}

export const PUBLICPAGES_STATE = {
  name: 'content.public_pages',
  url: '/public-pages',
  component: PublicPagesComponent,
  views: {
    'main_page': MainPageComponent,
    'content_page': ContentPageComponent
  }
}

export const CONTENT_STATES: Ng2StateDeclaration[] = [
  CONTENT_STATE,
  MYPAGES_STATE,
  SHAREDPAGES_STATE,
  PUBLICPAGES_STATE,
];
