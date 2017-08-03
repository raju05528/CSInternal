import { Routes } from '@angular/router';
//import { PROJECT_ROUTES } from './project/project.routes';
//import { HOME_ROUTES } from './home/home.routes';

declare var System: any;

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },      
  { path: '', loadChildren: './layout/layout.module#LayoutModule' },
  //...PROJECT_ROUTES 
];