import { ContentComponent } from './content.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContentPageComponent } from './content-page/content-page.component';

export const CONTENT_STATE = {
  name: 'content',
  url: '/content',
  component: ContentComponent
}

export const MAIN_PAGE_STATE = {
  name: 'content.main_page',
  url: '/content/main-page',
  component: MainPageComponent
}

export const CONTENT_PAGE_STATE = {
  name: 'content.content_page',
  url: '/content/content_page',
  component: ContentPageComponent
}
export const CONTENT_STATES = [
  CONTENT_STATE,
  MAIN_PAGE_STATE,
  CONTENT_PAGE_STATE
];
