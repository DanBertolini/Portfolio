import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

export const HOME_STATE = {
  name: 'home',
  url: '/',
  component: HomeComponent
}

export const CONTENT_STATE = {
  name: 'content.**',
  url: '/content',
  loadChildren: './content/content.module#ContentModule'
}

export const APP_STATES = [
  HOME_STATE,
  CONTENT_STATE
];
