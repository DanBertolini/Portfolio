import { Ng2StateDeclaration, Transition } from '@uirouter/angular';

import { ContentComponent } from './content.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { EditContentComponent } from './edit-content/edit-content.component';

const resolve = [{ token: 'pageId', deps: [Transition], resolveFn: (params: Transition) => params.params().pageId }];

const urlParams = "/:type/:pageId";
export const CONTENT_STATE: Ng2StateDeclaration = {
  name: 'content',
  url: '/content',
  component: ContentComponent
}

export const MYPAGES_STATE: Ng2StateDeclaration = {
  name: 'content.my_pages',
  url: '/my-pages',
  component: MainPageComponent
}

export const NEWPAGE_STATE: Ng2StateDeclaration = {
  name: 'content.new_page',
  url: '/my-pages/new',
  component: EditContentComponent
}

export const SHAREDPAGES_STATE: Ng2StateDeclaration = {
  name: 'content.shared_pages',
  url: '/shared-pages',
  component: MainPageComponent
}

export const PUBLICPAGES_STATE: Ng2StateDeclaration = {
  name: 'content.public_pages',
  url: '/public-pages',
  component: MainPageComponent
}

export const EDITPAGE_STATE: Ng2StateDeclaration = {
  name: 'content.edit_page',
  url: '/:origin/edit/:pageId',
  resolve: resolve,
  component: EditContentComponent
}

export const VIEWPAGE_STATE: Ng2StateDeclaration = {
  name: 'content.view_page',
  url: '/:origin/view/:pageId',
  resolve: resolve,
  component: ContentPageComponent
}

export const CONTENT_STATES: Ng2StateDeclaration[] = [
  CONTENT_STATE,
  MYPAGES_STATE,
  SHAREDPAGES_STATE,
  PUBLICPAGES_STATE,
  NEWPAGE_STATE,
  EDITPAGE_STATE,
  VIEWPAGE_STATE
];
