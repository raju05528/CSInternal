import { Routes, RouterModule } from '@angular/router';
import { Layout } from './layout.component';

//declare var System;
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: ''
    , component: Layout
    ,
    children: [
      //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  }
];

export const ROUTES = RouterModule.forChild(routes);
