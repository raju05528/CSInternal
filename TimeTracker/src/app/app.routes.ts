import { Routes } from '@angular/router';
import { PROJECT_ROUTES } from './project/project.routes';

declare var System: any;

export const ROUTES: Routes = [
  { path: '', redirectTo: 'project', pathMatch: 'full' } ,
  { path: '', loadChildren: './layout/layout.module#LayoutModule' }
];