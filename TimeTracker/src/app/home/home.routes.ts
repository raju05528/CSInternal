import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from './home/home.component';

const routes: Routes = [
    //{ path: 'home', component: Home },    
    //{ path: '', loadChildren: './layout/layout.module#LayoutModule' }
];

export const HOME_ROUTES = RouterModule.forChild(routes);